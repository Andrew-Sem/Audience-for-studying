import {addWindow} from "./addWindow.ts";
import {sizes} from "../constants/sizes.ts";
import {substractWall} from "./substractWall.ts";
import {Mesh} from "three";

export const createWindows = (walls: Mesh[]) => {
    const rightWindows:Mesh[] = []
    for(let i = -2; i < 3; i++){
        const window = addWindow(0.1, 1.5, 1, sizes.width/2, 0, i * 2, 0.2);
        rightWindows.push(window)
    }
    substractWall(walls[1], rightWindows)

    const backWindows:Mesh[] = []
    for(let i = -1; i < 2; i+=2){
        const window = addWindow(1, 1.5, 0.1, i, 0, sizes.depth/2, 0.2);
        backWindows.push(window)
    }
    substractWall(walls[2], backWindows)
}