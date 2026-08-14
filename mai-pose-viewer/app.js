import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';

const viewer = document.getElementById('viewer');
const fileInput = document.getElementById('vrmFile');
const statusEl = document.getElementById('status');
const emptyState = document.getElementById('emptyState');
const resetViewButton = document.getElementById('resetView');
const builtinMaiButton = document.getElementById('builtinMai');
const boneSelect = document.getElementById('boneSelect');
const poseResetButton = document.getElementById('poseReset');
const showBonesCheckbox = document.getElementById('showBones');
const showGridCheckbox = document.getElementById('showGrid');

const sliders = {
  x: document.getElementById('rotX'),
  y: document.getElementById('rotY'),
  z: document.getElementById('rotZ'),
};
const sliderValues = {
  x: document.getElementById('rotXValue'),
  y: document.getElementById('rotYValue'),
  z: document.getElementById('rotZValue'),
};

const editableBones = [
  ['head', '頭'],
  ['neck', '首'],
  ['upperChest', '胸上部'],
  ['chest', '胸'],
  ['spine', '背骨'],
  ['hips', '腰'],
  ['leftShoulder', '左肩'],
  ['leftUpperArm', '左上腕'],
  ['leftLowerArm', '左ひじ'],
  ['leftHand', '左手首'],
  ['rightShoulder', '右肩'],
  ['rightUpperArm', '右上腕'],
  ['rightLowerArm', '右ひじ'],
  ['rightHand', '右手首'],
  ['leftUpperLeg', '左太もも'],
  ['leftLowerLeg', '左ひざ'],
  ['leftFoot', '左足首'],
  ['rightUpperLeg', '右太もも'],
  ['rightLowerLeg', '右ひざ'],
  ['rightFoot', '右足首'],
];

for (const [name, label] of editableBones) {
  const option = document.createElement('option');
  option.value = name;
  option.textContent = label;
  boneSelect.appendChild(option);
}

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
viewer.prepend(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(29, 1, 0.05, 100);
camera.position.set(0, 1.25, 4.5);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.screenSpacePanning = true;
controls.minDistance = 0.55;
controls.maxDistance = 9;
controls.target.set(0, 1.05, 0);
controls.update();

scene.add(new THREE.HemisphereLight(0xffffff, 0x8b7f73, 2.15));
const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
keyLight.position.set(2.8, 4.5, 3.4);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0xffeee4, 1.35);
fillLight.position.set(-3.2, 2.4, 1.2);
scene.add(fillLight);
const rimLight = new THREE.DirectionalLight(0xcad8ff, 0.85);
rimLight.position.set(0, 3, -4);
scene.add(rimLight);

const grid = new THREE.GridHelper(6, 24, 0xaaa49d, 0xd4cec7);
grid.position.y = 0;
scene.add(grid);

const floor = new THREE.Mesh(
  new THREE.CircleGeometry(3, 64),
  new THREE.ShadowMaterial({ color: 0x6f655c, opacity: 0.12 }),
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -0.002;
floor.receiveShadow = true;
scene.add(floor);

const loader = new GLTFLoader();
loader.register((parser) => new VRMLoaderPlugin(parser));

let currentMode = 'builtin';
let currentRoot = null;
let currentVrm = null;
let currentUrl = null;
let skeletonHelper = null;
let currentModelHeight = 1.7;
let currentModelCenter = new THREE.Vector3(0, 0.85, 0);
let builtInBones = new Map();
const boneBaseQuaternions = new Map();
const boneAngles = new Map();

for (const [boneName] of editableBones) {
  boneAngles.set(boneName, { x: 0, y: 0, z: 0 });
}

function setStatus(text, isError = false) {
  statusEl.textContent = text;
  statusEl.classList.toggle('error', isError);
}

function material(color, roughness = 0.62, metalness = 0.0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

const colors = {
  skin: 0xffe2d3,
  skinShade: 0xf0c9ba,
  hair: 0xf3d686,
  hairShade: 0xd9b75f,
  eye: 0x3d76b7,
  eyeDark: 0x203f73,
  red: 0xb92f3c,
  redDark: 0x84232d,
  white: 0xfffbf7,
  cream: 0xf3eadf,
  gold: 0xd9b257,
  shoe: 0x7f252e,
};

function mesh(geometry, mat, parent, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
  const m = new THREE.Mesh(geometry, mat);
  m.position.set(...position);
  m.rotation.set(...rotation);
  m.scale.set(...scale);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function makeBone(name, parent, position) {
  const b = new THREE.Bone();
  b.name = name;
  b.position.set(...position);
  parent.add(b);
  builtInBones.set(name, b);
  return b;
}

function addCapsule(parent, radius, length, mat, position = [0, 0, 0], scale = [1, 1, 1]) {
  return mesh(new THREE.CapsuleGeometry(radius, length, 6, 14), mat, parent, position, [0, 0, 0], scale);
}

function addTube(parent, points, radius, mat) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  const tube = new THREE.TubeGeometry(curve, 20, radius, 7, false);
  return mesh(tube, mat, parent);
}

function addMikoSleeve(parent, side, whiteMat, trimMat) {
  const sx = side === 'left' ? -1 : 1;
  const shape = new THREE.Shape();
  shape.moveTo(-0.07, 0.04);
  shape.lineTo(0.07, 0.04);
  shape.lineTo(0.11 * sx, -0.49);
  shape.lineTo(0.30 * sx, -0.68);
  shape.lineTo(-0.18 * sx, -0.68);
  shape.lineTo(-0.10 * sx, -0.12);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.035, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2 });
  geo.translate(0, 0, -0.0175);
  const sleeve = mesh(geo, whiteMat, parent, [0, 0.04, 0]);
  const trim = mesh(new THREE.BoxGeometry(0.38, 0.025, 0.048), trimMat, parent, [0.09 * sx, -0.625, 0.003], [0, 0, -0.03 * sx]);
  trim.castShadow = false;
  return sleeve;
}

function addBow(parent, y, z, scale = 1, color = colors.red) {
  const bow = new THREE.Group();
  bow.position.set(0, y, z);
  bow.scale.setScalar(scale);
  parent.add(bow);
  const mat = material(color, 0.48);
  mesh(new THREE.SphereGeometry(0.075, 18, 12), mat, bow, [-0.07, 0, 0], [0, 0, 0.25], [1.35, 0.65, 0.35]);
  mesh(new THREE.SphereGeometry(0.075, 18, 12), mat, bow, [0.07, 0, 0], [0, 0, -0.25], [1.35, 0.65, 0.35]);
  mesh(new THREE.SphereGeometry(0.035, 16, 10), material(colors.redDark, 0.5), bow, [0, 0, 0.012], [0, 0, 0], [1, 0.9, 0.7]);
  return bow;
}

function addStar(parent, position, scale = 1) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 0.045 : 0.021;
    const a = Math.PI / 2 + i * Math.PI / 5;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  }
  shape.closePath();
  return mesh(new THREE.ShapeGeometry(shape), material(colors.gold, 0.3, 0.2), parent, position, [0, 0, 0], [scale, scale, scale]);
}

function buildMaiModel() {
  builtInBones = new Map();
  const root = new THREE.Group();
  root.name = 'MaiProceduralModel';

  const skinMat = material(colors.skin, 0.66);
  const hairMat = material(colors.hair, 0.5);
  const hairShadeMat = material(colors.hairShade, 0.57);
  const whiteMat = material(colors.white, 0.74);
  const redMat = material(colors.red, 0.6);
  const redDarkMat = material(colors.redDark, 0.58);
  const goldMat = material(colors.gold, 0.42, 0.12);
  const eyeWhiteMat = material(0xffffff, 0.45);
  const eyeMat = material(colors.eye, 0.36);
  const eyeDarkMat = material(colors.eyeDark, 0.34);

  const hips = makeBone('hips', root, [0, 0.92, 0]);
  const spine = makeBone('spine', hips, [0, 0.17, 0]);
  const chest = makeBone('chest', spine, [0, 0.18, 0]);
  const upperChest = makeBone('upperChest', chest, [0, 0.16, 0]);
  const neck = makeBone('neck', upperChest, [0, 0.15, 0]);
  const head = makeBone('head', neck, [0, 0.16, 0]);

  const leftShoulder = makeBone('leftShoulder', upperChest, [-0.18, 0.10, 0]);
  const leftUpperArm = makeBone('leftUpperArm', leftShoulder, [-0.09, -0.02, 0]);
  const leftLowerArm = makeBone('leftLowerArm', leftUpperArm, [0, -0.31, 0]);
  const leftHand = makeBone('leftHand', leftLowerArm, [0, -0.28, 0]);
  const rightShoulder = makeBone('rightShoulder', upperChest, [0.18, 0.10, 0]);
  const rightUpperArm = makeBone('rightUpperArm', rightShoulder, [0.09, -0.02, 0]);
  const rightLowerArm = makeBone('rightLowerArm', rightUpperArm, [0, -0.31, 0]);
  const rightHand = makeBone('rightHand', rightLowerArm, [0, -0.28, 0]);

  const leftUpperLeg = makeBone('leftUpperLeg', hips, [-0.105, -0.07, 0]);
  const leftLowerLeg = makeBone('leftLowerLeg', leftUpperLeg, [0, -0.44, 0]);
  const leftFoot = makeBone('leftFoot', leftLowerLeg, [0, -0.40, 0.015]);
  const rightUpperLeg = makeBone('rightUpperLeg', hips, [0.105, -0.07, 0]);
  const rightLowerLeg = makeBone('rightLowerLeg', rightUpperLeg, [0, -0.44, 0]);
  const rightFoot = makeBone('rightFoot', rightLowerLeg, [0, -0.40, 0.015]);

  addCapsule(spine, 0.145, 0.26, whiteMat, [0, 0.12, 0], [1.12, 1, 0.76]);
  mesh(new THREE.SphereGeometry(0.13, 24, 16), whiteMat, upperChest, [0, -0.02, 0], [0, 0, 0], [1.28, 0.85, 0.82]);
  mesh(new THREE.CylinderGeometry(0.11, 0.145, 0.17, 24), whiteMat, hips, [0, 0.03, 0], [0, 0, 0], [1, 1, 0.78]);

  mesh(new THREE.BoxGeometry(0.038, 0.23, 0.018), redMat, upperChest, [-0.075, -0.015, 0.13], [0.20, 0, -0.64]);
  mesh(new THREE.BoxGeometry(0.038, 0.23, 0.018), redMat, upperChest, [0.075, -0.015, 0.13], [-0.20, 0, 0.64]);
  addBow(upperChest, -0.11, 0.145, 0.62);
  mesh(new THREE.TorusGeometry(0.048, 0.008, 8, 24), goldMat, upperChest, [0, -0.115, 0.168]);
  addStar(upperChest, [0, -0.115, 0.177], 0.78);

  mesh(new THREE.CylinderGeometry(0.205, 0.37, 0.75, 36, 1, false), redMat, hips, [0, -0.41, 0], [0, 0, 0], [1, 1, 0.78]);
  mesh(new THREE.TorusGeometry(0.205, 0.018, 8, 36), goldMat, hips, [0, -0.035, 0], [Math.PI / 2, 0, 0], [1, 0.78, 1]);
  addBow(hips, -0.01, -0.17, 0.9, colors.redDark);

  addCapsule(leftUpperArm, 0.055, 0.24, whiteMat, [0, -0.15, 0], [1, 1, 0.9]);
  addCapsule(leftLowerArm, 0.048, 0.22, whiteMat, [0, -0.14, 0], [1, 1, 0.9]);
  mesh(new THREE.SphereGeometry(0.055, 18, 12), skinMat, leftHand, [0, -0.025, 0], [0, 0, 0], [0.8, 1.05, 0.65]);
  addMikoSleeve(leftUpperArm, 'left', whiteMat, redMat);
  addCapsule(rightUpperArm, 0.055, 0.24, whiteMat, [0, -0.15, 0], [1, 1, 0.9]);
  addCapsule(rightLowerArm, 0.048, 0.22, whiteMat, [0, -0.14, 0], [1, 1, 0.9]);
  mesh(new THREE.SphereGeometry(0.055, 18, 12), skinMat, rightHand, [0, -0.025, 0], [0, 0, 0], [0.8, 1.05, 0.65]);
  addMikoSleeve(rightUpperArm, 'right', whiteMat, redMat);

  addCapsule(leftUpperLeg, 0.075, 0.34, skinMat, [0, -0.23, 0], [0.86, 1, 0.82]);
  addCapsule(leftLowerLeg, 0.064, 0.31, skinMat, [0, -0.21, 0], [0.82, 1, 0.78]);
  mesh(new THREE.CapsuleGeometry(0.075, 0.13, 4, 10), material(colors.shoe, 0.56), leftFoot, [0, -0.04, 0.07], [Math.PI / 2, 0, 0], [0.78, 0.9, 0.72]);
  addCapsule(rightUpperLeg, 0.075, 0.34, skinMat, [0, -0.23, 0], [0.86, 1, 0.82]);
  addCapsule(rightLowerLeg, 0.064, 0.31, skinMat, [0, -0.21, 0], [0.82, 1, 0.78]);
  mesh(new THREE.CapsuleGeometry(0.075, 0.13, 4, 10), material(colors.shoe, 0.56), rightFoot, [0, -0.04, 0.07], [Math.PI / 2, 0, 0], [0.78, 0.9, 0.72]);

  mesh(new THREE.SphereGeometry(0.155, 32, 22), hairShadeMat, head, [0, 0.02, -0.025], [0, 0, 0], [1.02, 1.16, 0.93]);
  mesh(new THREE.SphereGeometry(0.138, 32, 22), skinMat, head, [0, 0.00, 0.025], [0, 0, 0], [1.00, 1.10, 0.86]);

  for (const side of [-1, 1]) {
    const x = side * 0.050;
    mesh(new THREE.SphereGeometry(0.034, 20, 14), eyeWhiteMat, head, [x, 0.018, 0.137], [0, 0, 0], [1.15, 0.72, 0.22]);
    mesh(new THREE.SphereGeometry(0.021, 18, 12), eyeMat, head, [x, 0.016, 0.145], [0, 0, 0], [0.9, 1.05, 0.32]);
    mesh(new THREE.SphereGeometry(0.010, 16, 10), eyeDarkMat, head, [x, 0.015, 0.151], [0, 0, 0], [0.9, 1.05, 0.45]);
    mesh(new THREE.SphereGeometry(0.004, 10, 8), material(0xffffff, 0.2), head, [x - side * 0.004, 0.024, 0.155], [0, 0, 0], [1, 1, 0.3]);
  }
  mesh(new THREE.SphereGeometry(0.012, 12, 8), material(0xe8b3a7, 0.7), head, [0, -0.020, 0.145], [0, 0, 0], [0.5, 0.35, 0.25]);
  addTube(head, [[-0.025, -0.058, 0.144], [0, -0.064, 0.149], [0.025, -0.058, 0.144]], 0.004, material(0xbc6570, 0.48));

  const bangGeo = new THREE.CapsuleGeometry(0.024, 0.11, 4, 10);
  mesh(bangGeo, hairMat, head, [-0.078, 0.085, 0.112], [0, 0, -0.35], [0.9, 1.15, 0.72]);
  mesh(bangGeo, hairMat, head, [-0.027, 0.100, 0.128], [0, 0, -0.10], [0.85, 1.05, 0.70]);
  mesh(bangGeo, hairMat, head, [0.030, 0.100, 0.128], [0, 0, 0.12], [0.85, 1.05, 0.70]);
  mesh(bangGeo, hairMat, head, [0.080, 0.083, 0.110], [0, 0, 0.35], [0.9, 1.15, 0.72]);

  const strands = [
    [-0.13, -0.055, -0.10, -0.18, -0.38, -0.11, -0.15, -0.72, -0.08],
    [-0.08, -0.06, -0.13, -0.10, -0.42, -0.15, -0.08, -0.76, -0.11],
    [-0.03, -0.06, -0.14, -0.03, -0.43, -0.17, -0.02, -0.78, -0.13],
    [0.03, -0.06, -0.14, 0.03, -0.43, -0.17, 0.02, -0.78, -0.13],
    [0.08, -0.06, -0.13, 0.10, -0.42, -0.15, 0.08, -0.76, -0.11],
    [0.13, -0.055, -0.10, 0.18, -0.38, -0.11, 0.15, -0.72, -0.08],
  ];
  for (let i = 0; i < strands.length; i++) {
    const s = strands[i];
    addTube(head, [[s[0], s[1], s[2]], [s[3], s[4], s[5]], [s[6], s[7], s[8]]], i === 0 || i === strands.length - 1 ? 0.034 : 0.040, i % 2 ? hairMat : hairShadeMat);
  }

  const headBow = addBow(head, 0.19, -0.015, 1.1);
  headBow.rotation.z = 0.03;
  mesh(new THREE.BoxGeometry(0.040, 0.18, 0.02), redDarkMat, headBow, [-0.034, -0.11, -0.01], [0, 0, 0.12]);
  mesh(new THREE.BoxGeometry(0.040, 0.18, 0.02), redDarkMat, headBow, [0.034, -0.11, -0.01], [0, 0, -0.12]);

  addStar(leftUpperArm, [-0.01, -0.45, 0.035], 0.7);
  addStar(rightUpperArm, [0.01, -0.45, 0.035], 0.7);

  root.traverse((obj) => {
    if (obj.isMesh) {
      obj.frustumCulled = false;
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });
  return root;
}

function disposeObjectTree(root) {
  root.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose?.();
    if (obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) mat.dispose?.();
    }
  });
}

function clearCurrentModel() {
  if (skeletonHelper) {
    scene.remove(skeletonHelper);
    skeletonHelper.geometry?.dispose?.();
    skeletonHelper.material?.dispose?.();
    skeletonHelper = null;
  }
  if (currentRoot) {
    scene.remove(currentRoot);
    if (currentMode === 'vrm' && currentVrm) VRMUtils.deepDispose(currentVrm.scene);
    else disposeObjectTree(currentRoot);
  }
  currentRoot = null;
  currentVrm = null;
  builtInBones.clear();
  boneBaseQuaternions.clear();
  if (currentUrl) {
    URL.revokeObjectURL(currentUrl);
    currentUrl = null;
  }
}

function getBoneNode(boneName) {
  if (currentMode === 'vrm') return currentVrm?.humanoid?.getNormalizedBoneNode(boneName) ?? null;
  return builtInBones.get(boneName) ?? null;
}

function cacheBoneBases() {
  boneBaseQuaternions.clear();
  for (const [boneName] of editableBones) {
    const bone = getBoneNode(boneName);
    if (bone) boneBaseQuaternions.set(boneName, bone.quaternion.clone());
  }
}

function applyBoneRotation(boneName) {
  const bone = getBoneNode(boneName);
  const base = boneBaseQuaternions.get(boneName);
  const angles = boneAngles.get(boneName);
  if (!bone || !base || !angles) return;
  const euler = new THREE.Euler(
    THREE.MathUtils.degToRad(angles.x),
    THREE.MathUtils.degToRad(angles.y),
    THREE.MathUtils.degToRad(angles.z),
    'XYZ',
  );
  bone.quaternion.copy(base).multiply(new THREE.Quaternion().setFromEuler(euler));
}

function setBoneAngles(boneName, x = 0, y = 0, z = 0) {
  if (!boneAngles.has(boneName)) return;
  boneAngles.set(boneName, { x, y, z });
  applyBoneRotation(boneName);
}

function resetPose() {
  if (!currentRoot) return;
  if (currentMode === 'vrm') currentVrm?.humanoid?.resetNormalizedPose?.();
  for (const [boneName] of editableBones) {
    boneAngles.set(boneName, { x: 0, y: 0, z: 0 });
    const bone = getBoneNode(boneName);
    const base = boneBaseQuaternions.get(boneName);
    if (bone && base) bone.quaternion.copy(base);
  }
  syncSlidersFromBone();
}

function applyPose(name) {
  if (!currentRoot) return;
  resetPose();
  if (name === 'armsSide') {
    setBoneAngles('leftUpperArm', 0, 0, -72);
    setBoneAngles('rightUpperArm', 0, 0, 72);
  } else if (name === 'armsUp') {
    setBoneAngles('leftUpperArm', 0, 0, -145);
    setBoneAngles('rightUpperArm', 0, 0, 145);
    setBoneAngles('leftLowerArm', 0, 0, 12);
    setBoneAngles('rightLowerArm', 0, 0, -12);
  } else if (name === 'staff') {
    setBoneAngles('leftUpperArm', -18, -4, -42);
    setBoneAngles('leftLowerArm', -72, 5, 18);
    setBoneAngles('leftHand', -10, 12, 8);
    setBoneAngles('rightUpperArm', -22, 7, 34);
    setBoneAngles('rightLowerArm', -88, -5, -16);
    setBoneAngles('rightHand', -12, -10, -8);
    setBoneAngles('upperChest', 0, -8, 0);
    setBoneAngles('head', 0, 10, 0);
  }
  syncSlidersFromBone();
}

function syncSlidersFromBone() {
  const name = boneSelect.value;
  const angles = boneAngles.get(name) ?? { x: 0, y: 0, z: 0 };
  const boneExists = Boolean(getBoneNode(name));
  for (const axis of ['x', 'y', 'z']) {
    sliders[axis].disabled = !boneExists;
    sliders[axis].value = String(angles[axis]);
    sliderValues[axis].value = boneExists ? `${Math.round(angles[axis])}°` : '—';
  }
}

function fitCameraToModel() {
  if (!currentRoot) return;
  const box = new THREE.Box3().setFromObject(currentRoot);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  currentModelHeight = Math.max(size.y, 0.5);
  currentModelCenter.copy(center);
  controls.target.copy(center);
  const distance = currentModelHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5))) * 1.10;
  camera.position.set(center.x, center.y + currentModelHeight * 0.03, center.z + distance);
  camera.near = Math.max(0.01, distance / 100);
  camera.far = Math.max(30, distance * 20);
  camera.updateProjectionMatrix();
  controls.minDistance = currentModelHeight * 0.28;
  controls.maxDistance = currentModelHeight * 5.5;
  controls.update();
}

function setView(kind) {
  if (!currentRoot) return;
  const center = currentModelCenter;
  const distance = Math.max(currentModelHeight * 2.25, 2.2);
  if (kind === 'front') camera.position.set(center.x, center.y, center.z + distance);
  if (kind === 'side') camera.position.set(center.x + distance, center.y, center.z);
  if (kind === 'back') camera.position.set(center.x, center.y, center.z - distance);
  controls.target.copy(center);
  controls.update();
}

function showBuiltInMai() {
  clearCurrentModel();
  currentMode = 'builtin';
  currentRoot = buildMaiModel();
  scene.add(currentRoot);
  cacheBoneBases();
  for (const [boneName] of editableBones) boneAngles.set(boneName, { x: 0, y: 0, z: 0 });
  skeletonHelper = new THREE.SkeletonHelper(currentRoot);
  skeletonHelper.visible = showBonesCheckbox.checked;
  scene.add(skeletonHelper);
  emptyState.classList.add('hidden');
  fitCameraToModel();
  syncSlidersFromBone();
  setStatus('舞モデル（内蔵） / 読み込み完了');
}

async function loadVrmFile(file) {
  if (!file) return;
  if (!file.name.toLowerCase().endsWith('.vrm')) {
    setStatus('VRMファイル（.vrm）を選択してください', true);
    return;
  }
  setStatus(`読み込み中: ${file.name}`);
  fileInput.disabled = true;
  try {
    clearCurrentModel();
    currentMode = 'vrm';
    currentUrl = URL.createObjectURL(file);
    const gltf = await loader.loadAsync(currentUrl);
    const vrm = gltf.userData.vrm;
    if (!vrm) throw new Error('VRMデータを取得できませんでした');
    VRMUtils.removeUnnecessaryVertices(vrm.scene);
    VRMUtils.combineSkeletons(vrm.scene);
    VRMUtils.combineMorphs(vrm);
    VRMUtils.rotateVRM0(vrm);
    vrm.scene.traverse((obj) => {
      obj.frustumCulled = false;
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
    scene.add(vrm.scene);
    currentVrm = vrm;
    currentRoot = vrm.scene;
    cacheBoneBases();
    fitCameraToModel();
    skeletonHelper = new THREE.SkeletonHelper(vrm.scene);
    skeletonHelper.visible = showBonesCheckbox.checked;
    scene.add(skeletonHelper);
    emptyState.classList.add('hidden');
    setStatus(`${file.name} / 読み込み完了`);
    syncSlidersFromBone();
  } catch (error) {
    console.error(error);
    setStatus(`読み込み失敗: ${error?.message ?? error}`, true);
    showBuiltInMai();
  } finally {
    fileInput.disabled = false;
    fileInput.value = '';
  }
}

fileInput.addEventListener('change', () => {
  const [file] = fileInput.files ?? [];
  loadVrmFile(file);
});
builtinMaiButton.addEventListener('click', showBuiltInMai);
boneSelect.addEventListener('change', syncSlidersFromBone);
for (const axis of ['x', 'y', 'z']) {
  sliders[axis].addEventListener('input', () => {
    const boneName = boneSelect.value;
    const angles = boneAngles.get(boneName) ?? { x: 0, y: 0, z: 0 };
    angles[axis] = Number(sliders[axis].value);
    boneAngles.set(boneName, angles);
    sliderValues[axis].value = `${Math.round(angles[axis])}°`;
    applyBoneRotation(boneName);
  });
}
poseResetButton.addEventListener('click', resetPose);
document.querySelectorAll('[data-pose]').forEach((button) => button.addEventListener('click', () => applyPose(button.dataset.pose)));
document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
resetViewButton.addEventListener('click', fitCameraToModel);
showBonesCheckbox.addEventListener('change', () => {
  if (skeletonHelper) skeletonHelper.visible = showBonesCheckbox.checked;
});
showGridCheckbox.addEventListener('change', () => {
  grid.visible = showGridCheckbox.checked;
  floor.visible = showGridCheckbox.checked;
});

function resizeRenderer() {
  const width = viewer.clientWidth;
  const height = viewer.clientHeight;
  if (width <= 0 || height <= 0) return;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

const resizeObserver = new ResizeObserver(resizeRenderer);
resizeObserver.observe(viewer);
resizeRenderer();

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 1 / 15);
  controls.update();
  currentVrm?.update(delta);
  renderer.render(scene, camera);
}
animate();

showBuiltInMai();
