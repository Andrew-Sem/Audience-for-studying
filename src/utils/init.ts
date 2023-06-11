import {Camera, PerspectiveCamera, Renderer, Scene, WebGLRenderer} from "three";

type InitReturn = {
    scene: Scene
    camera: Camera
    renderer: Renderer
}

export const init = ():InitReturn => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 2;
    camera.position.y = 0.5;
    return {scene, camera, renderer}
}