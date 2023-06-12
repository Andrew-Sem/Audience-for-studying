import {Camera, PCFSoftShadowMap, PerspectiveCamera, Renderer, Scene, WebGLRenderer} from "three";

type InitReturn = {
    scene: Scene
    camera: Camera
    renderer: Renderer
}


const init = ():InitReturn => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 2;
    return {scene, camera, renderer}
}

export const {scene, camera, renderer} = init()


