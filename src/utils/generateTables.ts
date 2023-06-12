import {loadObject} from "./loadObject.ts";
import {scene} from "./init.ts";
import {sizes} from "../constants/sizes.ts";

export const generateTables = async() => {
    const table = await loadObject("/table.glb", scene)
    table.position.y = -sizes.height / 2 + 0.01
    table.scale.set(0.15, 0.15, 0.15)
    table.rotation.y += Math.PI/2
    scene.remove(table)

    for(let i = -2; i < 4; i++){
        for(let j = -1.25; j <= 1.25; j+=1.25){
            const clonedTable = table.clone()
            clonedTable.position.x = j
            clonedTable.position.z = i - 0.1
            scene.add(clonedTable)
        }
    }
}