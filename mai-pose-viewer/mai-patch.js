import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let activeVrm = null;
let sleevePairs = [];
let styled = false;

function matColor(mat, hex) {
  if (!mat?.color) return;
  mat.color.setHex(hex);
  mat.needsUpdate = true;
}

function recolor(vrm) {
  vrm.scene.traverse((obj) => {
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const mat of mats) {
      if (!mat) continue;
      const n = (mat.name || '').toLowerCase();
      if (n.includes('hair')) matColor(mat, 0xffd66f);
      else if (n.includes('eyeiris')) matColor(mat, 0x65a4ee);
      else if (n.includes('tops')) matColor(mat, 0xfffaf3);
      else if (n.includes('bottoms')) matColor(mat, 0xb52e43);
      else if (n.includes('shoes')) matColor(mat, 0x842433);
      else if (n.includes('facebrow') || n.includes('faceeyeline')) matColor(mat, 0x8b682f);
    }
  });
}

function standard(color, side = THREE.FrontSide) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.64, metalness: 0, side });
}

function addMesh(parent, geometry, material, pos = [0,0,0], rot = [0,0,0], scale = [1,1,1]) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(...pos); m.rotation.set(...rot); m.scale.set(...scale);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}

function bow(parent, scale = 1, pos = [0,0,0], tails = false) {
  const g = new THREE.Group();
  g.position.set(...pos); g.scale.setScalar(scale); parent.add(g);
  const red = standard(0xb92f43), dark = standard(0x812332);
  addMesh(g, new THREE.SphereGeometry(0.075, 18, 12), red, [-0.073,0,0], [0,0,0.3], [1.5,0.72,0.38]);
  addMesh(g, new THREE.SphereGeometry(0.075, 18, 12), red, [0.073,0,0], [0,0,-0.3], [1.5,0.72,0.38]);
  addMesh(g, new THREE.SphereGeometry(0.035, 14, 10), dark, [0,0,0.016], [0,0,0], [1,0.95,0.7]);
  if (tails) {
    addMesh(g, new THREE.CapsuleGeometry(0.022,0.17,4,10), red, [-0.036,-0.12,-0.004], [0,0,-0.18], [1,1,0.55]);
    addMesh(g, new THREE.CapsuleGeometry(0.022,0.17,4,10), red, [0.036,-0.12,-0.004], [0,0,0.18], [1,1,0.55]);
  }
  return g;
}

function badge(parent, unit) {
  const g = new THREE.Group();
  g.position.set(0,-0.04*unit,0.112*unit); parent.add(g);
  addMesh(g, new THREE.TorusGeometry(0.034*unit,0.006*unit,8,24), standard(0xd7ad53));
  const shape = new THREE.Shape();
  for (let i=0;i<10;i++) {
    const r=(i%2===0?0.025:0.011)*unit, a=Math.PI/2+i*Math.PI/5;
    const x=Math.cos(a)*r, y=Math.sin(a)*r;
    if (i===0) shape.moveTo(x,y); else shape.lineTo(x,y);
  }
  shape.closePath();
  addMesh(g, new THREE.ShapeGeometry(shape), standard(0xf1cf6b,THREE.DoubleSide), [0,0,0.004*unit]);
}

function quadMesh(color) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12),3));
  geo.setIndex([0,1,2,0,2,3]);
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness:0.7, side:THREE.DoubleSide }));
  mesh.castShadow = true;
  return mesh;
}

function writeQuad(mesh, points) {
  const a = mesh.geometry.attributes.position.array;
  points.forEach((p,i) => { a[i*3]=p.x; a[i*3+1]=p.y; a[i*3+2]=p.z; });
  mesh.geometry.attributes.position.needsUpdate = true;
  mesh.geometry.computeVertexNormals();
}

function raw(vrm, name) { return vrm.humanoid?.getRawBoneNode(name) ?? null; }

function createSleeves(vrm, unit) {
  sleevePairs = [];
  for (const side of ['left','right']) {
    const cloth = quadMesh(0xfffbf7), trim = quadMesh(0xb72d41);
    vrm.scene.add(cloth, trim);
    sleevePairs.push({side, cloth, trim, unit});
  }
}

function updateSleeves(vrm) {
  if (vrm !== activeVrm) return;
  vrm.scene.updateMatrixWorld(true);
  for (const s of sleevePairs) {
    const prefix = s.side === 'left' ? 'left' : 'right';
    const shoulder = raw(vrm, `${prefix}UpperArm`), hand = raw(vrm, `${prefix}Hand`);
    if (!shoulder || !hand) continue;
    const a = shoulder.getWorldPosition(new THREE.Vector3());
    const b = hand.getWorldPosition(new THREE.Vector3());
    vrm.scene.worldToLocal(a); vrm.scene.worldToLocal(b);
    const drop = 0.34*s.unit, trimH = 0.028*s.unit;
    const c = a.clone().add(new THREE.Vector3(0,-drop*0.82,0));
    const d = b.clone().add(new THREE.Vector3(0,-drop,0));
    writeQuad(s.cloth,[a,b,d,c]);
    const up = new THREE.Vector3(0,trimH,0);
    writeQuad(s.trim,[c.clone().add(up),d.clone().add(up),d,c]);
  }
}

function accessories(vrm) {
  const box = new THREE.Box3().setFromObject(vrm.scene);
  const h = Math.max(box.getSize(new THREE.Vector3()).y,0.5);
  const unit = h/1.65;
  const head = raw(vrm,'head'), chest = raw(vrm,'upperChest') || raw(vrm,'chest'), hips = raw(vrm,'hips');

  if (head) {
    const g = new THREE.Group(); g.position.set(0,0.17*unit,0.015*unit); head.add(g);
    bow(g,1.2*unit,[0,0,0],true);
  }
  if (chest) {
    const g = new THREE.Group(); g.position.set(0,-0.005*unit,0.10*unit); chest.add(g);
    bow(g,0.62*unit,[0,0,0],false); badge(g,unit);
  }
  if (hips) {
    const g = new THREE.Group(); hips.add(g);
    addMesh(g,new THREE.CylinderGeometry(0.17*unit,0.34*unit,0.72*unit,36,1,true),standard(0xb52e43,THREE.DoubleSide),[0,-0.37*unit,0],[0,0,0],[1,1,0.76]);
    addMesh(g,new THREE.TorusGeometry(0.175*unit,0.015*unit,8,32),standard(0xd7ad53),[0,-0.025*unit,0],[Math.PI/2,0,0],[1,0.76,1]);
    bow(g,0.82*unit,[0,-0.04*unit,-0.13*unit],true);
  }
  createSleeves(vrm,unit);
}

function stylize(vrm) {
  if (!vrm || vrm.userData.__maiStyled) return;
  vrm.userData.__maiStyled = true;
  activeVrm = vrm;
  recolor(vrm);
  accessories(vrm);
  styled = true;
  console.info('[MaiPatch] VRMを舞スタイルへ変換しました');
}

const originalLoadAsync = GLTFLoader.prototype.loadAsync;
GLTFLoader.prototype.loadAsync = async function (...args) {
  const gltf = await originalLoadAsync.apply(this,args);
  const vrm = gltf?.userData?.vrm;
  if (vrm) setTimeout(() => stylize(vrm),0);
  return gltf;
};

function loop() {
  requestAnimationFrame(loop);
  if (styled && activeVrm) updateSleeves(activeVrm);
}
loop();
