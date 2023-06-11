import * as THREE from 'three';
import {addLight} from "./utils/addLight.ts";
import {loadObject} from "./utils/loadObject.ts";

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 2;
camera.position.y = 0.5;

const chair = await loadObject("/chair.glb", scene)

addLight(scene)

// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    chair.rotation.y += 0.01

    renderer.render(scene, camera);
}

animate();
