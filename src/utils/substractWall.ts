import {BoxGeometry, Mesh} from "three";
import {CSG} from "three-csg-ts";
import {scene} from "./init.ts";

export const substractWall = (wall: Mesh, window: Mesh): Mesh => {
    const wallGeometry = wall.geometry as BoxGeometry;
    wallGeometry.center(); // вычисляем центр геометрии стены
    wallGeometry.translate(wall.position.x, wall.position.y, wall.position.z); // перемещаем геометрию в мировые координаты стены

    const wallCSG = CSG.fromMesh(wall);
    const windowCSG = CSG.fromMesh(window);

    const substractedCSG = wallCSG.subtract(windowCSG);
    const newWall = CSG.toMesh(substractedCSG, wall.matrixWorld, wall.material);
    scene.remove(wall);
    scene.add(newWall);
    return newWall;
};