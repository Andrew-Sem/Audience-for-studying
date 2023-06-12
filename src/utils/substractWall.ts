import {BoxGeometry, Mesh} from "three";
import {CSG} from "three-csg-ts";
import {scene} from "./init.ts";

export const substractWall = (wall: Mesh, windows: Mesh[]): Mesh => {
    const wallGeometry = wall.geometry as BoxGeometry;
    wallGeometry.center(); // вычисляем центр геометрии стены
    wallGeometry.translate(wall.position.x, wall.position.y, wall.position.z); // перемещаем геометрию в мировые координаты стены

    let wallCSG = CSG.fromMesh(wall);
    for (const window of windows) {
        const windowCSG = CSG.fromMesh(window);
        wallCSG = wallCSG.subtract(windowCSG);
    }

    const newWall = CSG.toMesh(wallCSG, wall.matrixWorld, wall.material);
    scene.remove(wall);
    scene.add(newWall);
    return newWall;
};
