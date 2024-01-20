import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

export const snowflake_two_canvas = document.createElement("canvas");
snowflake_two_canvas.classList.add("snowflake_two_canvas");
snowflake_two_canvas.width = 150;
snowflake_two_canvas.height = 150;

const scene = new THREE.Scene();

const loaderGLTF = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./draco/");
loaderGLTF.setDRACOLoader(dracoLoader);

const snowflakeModelGLB = "./assets/3d/snowflake_compressed_03-v1.glb";

const rotationSpeedX = 0.024;
const rotationSpeedY = 0.024;

let snowflake;

loaderGLTF.load(snowflakeModelGLB, (gltf) => {
  snowflake = gltf.scene;
  scene.add(snowflake);
  snowflake.scale.set(10, 10, 10);
  snowflake.position.set(0, 0, 0);

  if (snowflake) {
    snowflake.rotation.x += rotationSpeedX;
    snowflake.rotation.y += rotationSpeedY;
  }
});

const fieldOfView = 75;
const nearClippingPlane = 0.1;
const farClippingPlane = 1000;

let aspectRatio = snowflake_two_canvas.width / snowflake_two_canvas.height;
const camera = new THREE.PerspectiveCamera(
  fieldOfView,
  aspectRatio,
  nearClippingPlane,
  farClippingPlane
);

const cameraZ = 400;
camera.position.z = cameraZ;
camera.position.set(6, 6, 12);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0x4bd3ff, 0.6);
directionalLight.position.set(0, 1, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);
const lightOne = new THREE.PointLight(0xff39b2, 80);
lightOne.position.set(0, 10, -10);
scene.add(lightOne);
const lightTwo = new THREE.PointLight(0x39eaff, 60);
lightTwo.position.set(10, -10, 0);
scene.add(lightTwo);
const lightThree = new THREE.PointLight(0x81ffe0, 60);
lightThree.position.set(2, 5, 2);
scene.add(lightThree);
const lightFour = new THREE.PointLight(0xff66eb, 90);
lightFour.position.set(3, -5, 2);
scene.add(lightFour);
const lightFive = new THREE.PointLight(0x21ffd3, 80);
lightFive.position.set(-1, -5, 2);
camera.add(lightFive);

scene.background = null;

const renderer = new THREE.WebGL1Renderer({
  canvas: snowflake_two_canvas,
  alpha: true,
});
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(snowflake_two_canvas.width, snowflake_two_canvas.height);
document.body.appendChild(renderer.domElement);

function animSnowflake() {
  if (snowflake) {
    snowflake.rotation.x += rotationSpeedX;
    snowflake.rotation.y += rotationSpeedY;
  }
}

function render() {
  requestAnimationFrame(render);
  animSnowflake();
  renderer.render(scene, camera);
}

const createControls = () => {
  const renderer = new CSS2DRenderer();
  renderer.setSize(snowflake_two_canvas.width, snowflake_two_canvas.height);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.top = "220px";
  renderer.domElement.style.right = "15px";
  renderer.domElement.style.zIndex = "500";
  document.body.appendChild(renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.enableZoom = true;
  controls.enablePan = true;
  controls.update();
};

createControls();

render();
