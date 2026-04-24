// main.js

// Import necessary modules from Three.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

// Scene Setup
const scene = new THREE.Scene();

// Fog Setup
scene.fog = new THREE.Fog(0xaaaaaa, 5, 15);

// Camera Initialization
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

// Renderer Initialization
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting System
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(10, 10, 10);
spotLight.castShadow = true;
scene.add(spotLight);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Apartment Geometry Setup
const apartmentGeometry = new THREE.BoxGeometry(4, 3, 6);
const apartmentMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
const apartment = new THREE.Mesh(apartmentGeometry, apartmentMaterial);
scene.add(apartment);

// Controls Setup
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;

// Responsive design for window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();

// Mobile Controls for Virtual Joystick (if applicable)
// You may want to implement a library for virtual joystick and touch controls here.