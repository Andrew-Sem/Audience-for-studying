import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {camera, renderer} from "./init.ts";

export const createControls = (): OrbitControls => {
    const controls = new OrbitControls(camera, renderer.domElement);

    // controls.update() must be called after any manual changes to the camera's transform
    controls.update();
    return controls
}