import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';

const viewer = document.getElementById('viewer');
const fileInput = document.getElementById('vrmFile');
const statusEl = document.getElementById('status');
const emptyState = document.getElementById('emptyState');
const resetViewButton = document.getElementById('resetView');
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
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
viewer.prepend(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 100);
camera.position.set(0, 1.25, 4.5);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.screenSpacePanning = true;
controls.minDistance = 0.55;
controls.maxDistance = 9;
controls.target.set(0, 1.15, 0);
controls.update();

scene.add(new THREE.HemisphereLight(0xffffff, 0x8c8177, 2.4));
const keyLight = new THREE.DirectionalLight(0xffffff, 3.0);
keyLight.position.set(2.5, 4.5, 3.5);
keyLight.castShadow = true;
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0xfff3e3, 1.4);
fillLight.position.set(-3, 2.5, 1.5);
scene.add(fillLight);

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

let currentVrm = null;
let currentUrl = null;
let skeletonHelper = null;
let currentModelHeight = 1.7;
let currentModelCenter = new THREE.Vector3(0, 0.85, 0);
const boneBaseQuaternions = new Map();
const boneAngles = new Map();

for (const [boneName] of editableBones) {
  boneAngles.set(boneName, { x: 0, y: 0, z: 0 });
}

function setStatus(text, isError = false) {
  statusEl.textContent = text;
  statusEl.classList.toggle('error', isError);
}

function disposeCurrentModel() {
  if (skeletonHelper) {
    scene.remove(skeletonHelper);
    skeletonHelper.geometry?.dispose?.();
    skeletonHelper.material?.dispose?.();
    skeletonHelper = null;
  }

  if (currentVrm) {
    scene.remove(currentVrm.scene);
    VRMUtils.deepDispose(currentVrm.scene);
    currentVrm = null;
  }

  boneBaseQuaternions.clear();
  for (const [boneName] of editableBones) {
    boneAngles.set(boneName, { x: 0, y: 0, z: 0 });
  }

  if (currentUrl) {
    URL.revokeObjectURL(currentUrl);
    currentUrl = null;
  }
}

function getBoneNode(boneName) {
  return currentVrm?.humanoid?.getNormalizedBoneNode(boneName) ?? null;
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
  const delta = new THREE.Quaternion().setFromEuler(euler);
  bone.quaternion.copy(base).multiply(delta);
}

function setBoneAngles(boneName, x = 0, y = 0, z = 0) {
  if (!boneAngles.has(boneName)) return;
  boneAngles.set(boneName, { x, y, z });
  applyBoneRotation(boneName);
}

function resetPose() {
  if (!currentVrm) return;
  currentVrm.humanoid.resetNormalizedPose();
  cacheBoneBases();
  for (const [boneName] of editableBones) {
    boneAngles.set(boneName, { x: 0, y: 0, z: 0 });
  }
  syncSlidersFromBone();
}

function applyPose(name) {
  if (!currentVrm) return;
  resetPose();

  if (name === 'armsSide') {
    setBoneAngles('leftUpperArm', 0, 0, 72);
    setBoneAngles('rightUpperArm', 0, 0, -72);
  } else if (name === 'armsUp') {
    setBoneAngles('leftUpperArm', 0, 0, 145);
    setBoneAngles('rightUpperArm', 0, 0, -145);
    setBoneAngles('leftLowerArm', 0, 0, -12);
    setBoneAngles('rightLowerArm', 0, 0, 12);
  } else if (name === 'staff') {
    setBoneAngles('leftUpperArm', -30, -8, 42);
    setBoneAngles('leftLowerArm', -72, 5, -8);
    setBoneAngles('leftHand', -10, 12, 8);
    setBoneAngles('rightUpperArm', -38, 10, -28);
    setBoneAngles('rightLowerArm', -88, -5, 12);
    setBoneAngles('rightHand', -12, -10, -8);
    setBoneAngles('upperChest', 0, -8, 0);
    setBoneAngles('head', 0, 10, 0);
  }

  syncSlidersFromBone();
}

function syncSlidersFromBone() {
  const name = boneSelect.value;
  const angles = boneAngles.get(name) ?? { x: 0, y: 0, z: 0 };
  for (const axis of ['x', 'y', 'z']) {
    sliders[axis].value = String(angles[axis]);
    sliderValues[axis].value = `${Math.round(angles[axis])}°`;
  }
}

function fitCameraToModel() {
  if (!currentVrm) return;
  const box = new THREE.Box3().setFromObject(currentVrm.scene);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  currentModelHeight = Math.max(size.y, 0.5);
  currentModelCenter.copy(center);

  controls.target.copy(center);
  const distance = currentModelHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5))) * 1.15;
  camera.position.set(center.x, center.y + currentModelHeight * 0.04, center.z + distance);
  camera.near = Math.max(0.01, distance / 100);
  camera.far = Math.max(30, distance * 20);
  camera.updateProjectionMatrix();
  controls.minDistance = currentModelHeight * 0.28;
  controls.maxDistance = currentModelHeight * 5.5;
  controls.update();
}

function setView(kind) {
  const center = currentModelCenter;
  const distance = Math.max(currentModelHeight * 2.25, 2.2);
  if (kind === 'front') {
    camera.position.set(center.x, center.y, center.z + distance);
  } else if (kind === 'side') {
    camera.position.set(center.x + distance, center.y, center.z);
  } else if (kind === 'back') {
    camera.position.set(center.x, center.y, center.z - distance);
  }
  controls.target.copy(center);
  controls.update();
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
    disposeCurrentModel();
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
    emptyState.classList.remove('hidden');
  } finally {
    fileInput.disabled = false;
  }
}

fileInput.addEventListener('change', () => {
  const [file] = fileInput.files ?? [];
  loadVrmFile(file);
});

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
document.querySelectorAll('[data-pose]').forEach((button) => {
  button.addEventListener('click', () => applyPose(button.dataset.pose));
});
document.querySelectorAll('[data-view]').forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view));
});
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
syncSlidersFromBone();

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 1 / 15);
  controls.update();
  currentVrm?.update(delta);
  renderer.render(scene, camera);
}
animate();
