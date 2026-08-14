class SpeedometerModel {
  constructor() {
    this.slew = { startDuty:0, targetDuty:0, startTime:nowSec(), durationOverride:null };
  }
  mapDuty(duty, field) {
    const points = [
      { duty:0, speed:0, gauge:0 },
      ...Object.values(CONFIG.motor.notch).map((n) => ({ duty:n.duty, speed:n.speed, gauge:n.gauge })),
    ];
    if (duty <= points[0].duty) return points[0][field];
    if (duty >= points.at(-1).duty) return points.at(-1)[field];
    for (let i=0; i<points.length-1; i++) {
      const a=points[i], b=points[i+1];
      if (duty >= a.duty && duty <= b.duty) {
        const p=(duty-a.duty)/(b.duty-a.duty || 1);
        return a[field] + (b[field]-a[field])*p;
      }
    }
    return 0;
  }
  normalRate() {
    return 100 / (100 * CONFIG.motor.manualMillisecondsPerPermille / 1000);
  }
  duration(start, target) {
    const first=CONFIG.motor.startupFirstDuty;
    const second=CONFIG.motor.startupSecondDuty;
    const rate1=first/CONFIG.motor.startupFirstDuration;
    const rate2=(second-first)/CONFIG.motor.startupSecondDuration;
    const normal=this.normalRate();
    if (target > start && start < second && target >= first) {
      let d=0, cursor=start;
      if (cursor < first) {
        const end=Math.min(target, first);
        d += (end-cursor)/rate1; cursor=end;
      }
      if (target > cursor && cursor < second) {
        const end=Math.min(target, second);
        d += (end-cursor)/rate2; cursor=end;
      }
      if (target > cursor) d += (target-cursor)/normal;
      return Math.max(.01,d);
    }
    return Math.max(.01,Math.abs(target-start)/normal);
  }
  profileDuty(start,target,elapsed) {
    const first=CONFIG.motor.startupFirstDuty;
    const second=CONFIG.motor.startupSecondDuty;
    const rate1=first/CONFIG.motor.startupFirstDuration;
    const rate2=(second-first)/CONFIG.motor.startupSecondDuration;
    const normal=this.normalRate();
    if (target > start && start < second && target >= first) {
      let remaining=elapsed, cursor=start;
      if (cursor < first) {
        const end=Math.min(target,first);
        const dur=(end-cursor)/rate1;
        if (remaining <= dur) return cursor+(end-cursor)*(remaining/Math.max(dur,.001));
        remaining -= dur; cursor=end;
      }
      if (target > cursor && cursor < second) {
        const end=Math.min(target,second);
        const dur=(end-cursor)/rate2;
        if (remaining <= dur) return cursor+(end-cursor)*(remaining/Math.max(dur,.001));
        remaining -= dur; cursor=end;
      }
      if (target > cursor) return Math.min(target, cursor+normal*remaining);
      return target;
    }
    const dir=Math.sign(target-start);
    return dir >= 0 ? Math.min(target,start+normal*elapsed) : Math.max(target,start-normal*elapsed);
  }
  presentation(at=nowSec()) {
    const s=this.slew;
    const elapsed=Math.max(0,at-s.startTime);
    const duration=s.durationOverride ?? this.duration(s.startDuty,s.targetDuty);
    const progress=clamp(elapsed/Math.max(.01,duration),0,1);
    let duty;
    if (s.durationOverride != null) duty=s.startDuty+(s.targetDuty-s.startDuty)*progress;
    else duty=this.profileDuty(s.startDuty,s.targetDuty,elapsed);
    if (s.startDuty > .5 && s.targetDuty <= .5) {
      const remain=1-progress;
      return { duty, speed:this.mapDuty(s.startDuty,'speed')*remain, gauge:this.mapDuty(s.startDuty,'gauge')*remain, progress, duration };
    }
    return { duty, speed:this.mapDuty(duty,'speed'), gauge:this.mapDuty(duty,'gauge'), progress, duration };
  }
  startSlew(targetDuty, durationOverride=null) {
    const p=this.presentation();
    this.slew={ startDuty:p.duty, targetDuty:clamp(targetDuty,0,1000), startTime:nowSec(), durationOverride };
  }
  reset(duty=0) {
    this.slew={ startDuty:duty, targetDuty:duty, startTime:nowSec(), durationOverride:null };
  }
  remainingStopTravel(at=nowSec()) {
    const s=this.slew;
    if (!(s.startDuty>.5 && s.targetDuty<=.5)) return 0;
    const p=this.presentation(at);
    const duration=s.durationOverride ?? this.duration(s.startDuty,s.targetDuty);
    const elapsed=Math.max(0,at-s.startTime);
    const remaining=Math.max(0,duration-elapsed);
    const pxps=p.speed/CONFIG.scene.maxGaugeSpeed*CONFIG.scene.maxAnimationSpeed;
    return .5*pxps*remaining;
  }
}

