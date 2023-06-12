import {loadObject} from "./loadObject.ts";
import {scene} from "./init.ts";
import {sizes} from "../constants/sizes.ts";
import {SpotLight} from "three";

export const createProjector = async () => {
    const projector = await loadObject("/projector.glb", scene)
    projector.scale.set(0.1, 0.1, 0.1)
    projector.position.set(-sizes.width /7, sizes.height/2 - 0.45, -1)
    projector.rotation.y -= Math.PI/2

    const spotLight = new SpotLight(0xffffff, 0.1);
    spotLight.position.set(-sizes.width /7, sizes.height/2 - 0.45, -1);
    spotLight.target.position.set(-0.8, 0, -sizes.depth / 2 + 0.1);
    spotLight.angle = 0.3; // Угол конуса света
    spotLight.penumbra = 0.9; // Мягкость краев
    spotLight.castShadow = true;
    scene.add(spotLight);
    scene.add(spotLight.target);
}