import {BoxGeometry, DoubleSide, Mesh, MeshPhongMaterial} from "three";
import {scene} from "./init.ts";

export const addWindow = (width: number, height: number, depth: number, x: number, y: number, z: number, opacity: number): Mesh => {
    const windowGeometry = new BoxGeometry(width, height, depth)
    windowGeometry.center()
    windowGeometry.translate(x, y, z)
    const windowMaterial = new MeshPhongMaterial({
        transparent: true,
        opacity,
        side: DoubleSide
    })

    const windowMesh = new Mesh(windowGeometry, windowMaterial)
    scene.add(windowMesh)

    return windowMesh
}