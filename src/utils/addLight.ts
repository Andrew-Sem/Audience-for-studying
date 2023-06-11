import {AmbientLight, Scene} from "three";

export const addLight = (scene: Scene) => {
    const light = new AmbientLight(0x404040, 2);
    scene.add(light);


}