import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

export const snowflake_one_canvas = document.createElement("canvas");
snowflake_one_canvas.classList.add("snowflake_one_canvas");
snowflake_one_canvas.width = 200;
snowflake_one_canvas.height = 200;

const scene = new THREE.Scene();

const loaderGLTF = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./draco/");
loaderGLTF.setDRACOLoader(dracoLoader);

const snowflakeModelGLB = "./assets/3d/snowflake_compressed_01-v1.glb";

const rotationSpeedX = 0.02;
const rotationSpeedY = 0.02;

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

let aspectRatio = snowflake_one_canvas.width / snowflake_one_canvas.height;
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
const lightOne = new THREE.PointLight(0xff2bf2, 80);
lightOne.position.set(0, 10, -10);
scene.add(lightOne);
const lightTwo = new THREE.PointLight(0x4bffd3, 60);
lightTwo.position.set(10, -10, 0);
scene.add(lightTwo);
const lightThree = new THREE.PointLight(0xb83cff, 60);
lightThree.position.set(1, 5, 1);
scene.add(lightThree);
const lightFour = new THREE.PointLight(0x25cdf1, 60);
lightFour.position.set(3, -5, 2);
scene.add(lightFour);
const lightFive = new THREE.PointLight(0x21ffd3, 70);
lightFive.position.set(-1, -5, 2);
camera.add(lightFive);

scene.background = null;

const renderer = new THREE.WebGL1Renderer({
  canvas: snowflake_one_canvas,
  alpha: true,
});
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(snowflake_one_canvas.width, snowflake_one_canvas.height);
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
  renderer.setSize(snowflake_one_canvas.width, snowflake_one_canvas.height);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.top = "120px";
  renderer.domElement.style.left = "10px";
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
