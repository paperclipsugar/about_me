import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

const w = window.innerWidth; const h = window.innerHeight;

// camera
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

// orbit control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// grid helper
const gridHelper = new THREE.GridHelper( 30, 30 );
scene.add( gridHelper );

// lighting
const rectLight = new THREE.RectAreaLight( 0xffffff, 1, 5, 5 );
rectLight.position.set( 1, 0, 0 );
rectLight.lookAt( 0, 0, 0 );
scene.add( rectLight );

const rectLightHelper = new RectAreaLightHelper( rectLight );
rectLight.add( rectLightHelper );

function animate() {
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera);
    controls.update();
  }
  animate();
  
  function handleWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  window.addEventListener('resize', handleWindowResize, false);