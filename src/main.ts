import * as THREE from 'three';
import {addLights} from "./lights.ts";
import {loadObject} from "./loadObject.ts";

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 2;
camera.position.y = 0.5;

const chair = await loadObject("/chair.glb", scene)

addLights(scene)

// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    chair.rotation.y += 0.01

    renderer.render(scene, camera);
}

animate();
