import {DoubleSide, Mesh, MeshPhongMaterial} from "three";
import {sizes} from "../constants/sizes.ts";
import {addWindow} from "./addWindow.ts";
import {substractWall} from "./substractWall.ts";
import {createMesh} from "./createMesh.ts";
import {createWindows} from "./createWindows.ts";

export const createAudience = () => {
    // Создание материалов для стен, пола и потолка
    const wallMaterial = new MeshPhongMaterial({color: 0xeeeeee, side: DoubleSide});
    const floorMaterial = new MeshPhongMaterial({color: 0xaaaaaa});
    const ceilingMaterial = new MeshPhongMaterial({color: 0xdddddd});

    const floor = createMesh(0, -sizes.height/2, 0, sizes.width, 0.01, sizes.depth, floorMaterial)
    const ceiling = createMesh(0, sizes.height/2, 0, sizes.width, 0.01, sizes.depth, ceilingMaterial)
    let walls: Mesh[] = []
    for(let i = 0; i < 4; i++){
        const width = i % 2 ? 0.01 : sizes.width
        const height = sizes.height
        const depth = i % 2 ? sizes.depth : 0.01
        walls.push(createMesh(0, 0, 0, width, height, depth, wallMaterial))
    }

    walls[0].position.set(0, 0, -sizes.depth/2)
    walls[1].position.set(sizes.width/2, 0, 0)
    walls[2].position.set(0, 0, sizes.depth/2)
    walls[3].position.set(-sizes.width/2, 0, 0)


    createWindows(walls)

};
