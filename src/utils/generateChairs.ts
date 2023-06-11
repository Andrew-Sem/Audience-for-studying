import {loadObject} from "./loadObject.ts";
import {sizes} from "../constants/sizes.ts";
import {Scene} from "three";

export const generateChairs = async (scene: Scene) => {
    const chair = await loadObject("/chair.glb", scene)
    chair.position.y = -sizes.height / 2 + 0.01
    chair.scale.set(0.5, 0.5, 0.5)

    for(let i = -2; i < 5; i++){
        for(let j = -2; j < 3; j++){
            const clonedChair = chair.clone()
            clonedChair.position.x = j
            clonedChair.position.z = i
            scene.add(clonedChair)
        }
    }
}