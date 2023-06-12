import {addWindow} from "./addWindow.ts";
import {sizes} from "../constants/sizes.ts";
import {substractWall} from "./substractWall.ts";
import {Mesh} from "three";

export const createWindows = (walls: Mesh[]) => {
    const windows:Mesh[] = []
    for(let i = -2; i < 3; i++){
        const window = addWindow(0.1, 1.5, 1, sizes.width/2, 0, i * 2, 0.2);
        windows.push(window)
    }
    substractWall(walls[1], windows)
}