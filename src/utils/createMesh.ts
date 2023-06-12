import {BoxGeometry, Mesh, MeshPhongMaterial} from "three";
import {scene} from "./init.ts";

export const createMesh = (x: number, y: number, z: number, width: number, height: number, depth: number, material: MeshPhongMaterial): Mesh => {
    const meshGeometry = new BoxGeometry(width, height, depth);
    const mesh = new Mesh(meshGeometry, material);
    mesh.position.set(x, y, z);
    mesh.receiveShadow = true;
    scene.add(mesh)
    return mesh;
};
