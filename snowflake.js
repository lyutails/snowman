/* import * as THREE from "three";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const canvas = document.createElement('canvas');
canvas.classList.add('snowflake_canvas')

function createScene() {
  this.scene = new THREE.Scene();

  const loaderGLTF = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("../../../assets/draco/");
  loaderGLTF.setDRACOLoader(dracoLoader);

  const snowflakeModelGLB =
    "../../../assets/3d_glb/snowflake_compressed_01-v1.glb";

  loaderGLTF.load(snowflakeModelGLB, (gltf) => {
    this.snowflake = gltf.scene.children[0];
    this.scene.add(this.snowflake);
    this.snowflake.scale.set(3.5, 3.5, 3.5);
  });

  let aspectRatio = this.getAspectRatio();
  this.camera = new THREE.PerspectiveCamera(
    this.fieldOfView,
    aspectRatio,
    this.nearClippingPlane,
    this.farClippingPlane
  );
  this.camera.position.z = this.cameraZ;

  this.ambientLight = new THREE.AmbientLight(0xffffff);
  this.scene.add(this.ambientLight);

  this.directionalLight = new THREE.DirectionalLight(0x4bd3ff, 0.6);
  this.directionalLight.position.set(0, 1, 0);
  this.directionalLight.castShadow = true;
  this.scene.add(this.directionalLight);
  this.lightOne = new THREE.PointLight(0xff2bf2, 80);
  this.lightOne.position.set(0, 10, -10);
  this.scene.add(this.lightOne);
  this.lightTwo = new THREE.PointLight(0x4bffd3, 60);
  this.lightTwo.position.set(10, -10, 0);
  this.scene.add(this.lightTwo);
  this.lightThree = new THREE.PointLight(0xb83cff, 60);
  this.lightThree.position.set(1, 5, 1);
  this.scene.add(this.lightThree);
  this.lightFour = new THREE.PointLight(0x25cdf1, 60);
  this.lightFour.position.set(3, -5, 2);
  this.scene.add(this.lightFour);
}

function getAspectRatio() {
  return canvas.clientWidth / canvas.clientHeight;
}

function animSnowflake() {
  if (this.snowflake) {
    this.snowflake.rotation.x += this.rotationSpeedX;
    this.snowflake.rotation.y += this.rotationSpeedY;
  }
}

function startRenderingLoop() {
  const renderer = new THREE.WebGL1Renderer({
    canvas: this.canvas,
    alpha: true,
  });
  renderer.setClearColor(0x000000, 0);
  scene.background = null;
  renderer.setPixelRatio(devicePixelRatio);
  renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

  let component = this;
  (function render() {
    requestAnimationFrame(render);
    component.animSnowflake();
    component.renderer.render(component.scene, component.camera);
  })();
}

const createControls = () => {
  const renderer = new CSS2DRenderer();
  renderer.setSize(this.canvas.width, this.canvas.height);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.top = "0px";
  document.body.appendChild(renderer.domElement);
  this.controls = new OrbitControls(this.camera, renderer.domElement);
  this.controls.autoRotate = true;
  this.controls.enableZoom = true;
  this.controls.enablePan = true;
  this.controls.update();
};

createScene();
startRenderingLoop();
createControls(); */
