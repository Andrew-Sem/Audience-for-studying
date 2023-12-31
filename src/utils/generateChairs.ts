import {loadObject} from "./loadObject.ts";
import {sizes} from "../constants/sizes.ts";
import {scene} from "./init.ts";

export const generateChairs = async () => {
    const chair = await loadObject("/chair.glb", scene)
    chair.position.y = -sizes.height / 2 + 0.01
    chair.scale.set(0.6, 0.6, 0.6)
    scene.remove(chair)

    for(let i = -2; i < 4; i++){
        for(let j = -1.25; j <= 1.25; j+=1.25){
            const clonedChair = chair.clone()
            clonedChair.position.x = j
            clonedChair.position.z = i
            scene.add(clonedChair)
        }
    }
}