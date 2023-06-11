import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {Camera, Renderer} from "three";

export const createControls = (camera: Camera, renderer: Renderer): OrbitControls => {
    const controls = new OrbitControls(camera, renderer.domElement);

    // controls.update() must be called after any manual changes to the camera's transform
    controls.update();
    return controls
}