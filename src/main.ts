import * as THREE from 'three';
import {addLights} from "./lights.ts";
import {loadModel} from "./loadModel.ts";

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 2;

loadModel("/chair.glb", scene)

addLights(scene)

// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
