import {BoxGeometry, Mesh, MeshStandardMaterial} from "three";
import {scene} from "./init.ts";
import {sizes} from "../constants/sizes.ts";

export const createDoor = () => {
    const width = 1
    const height = 2
    const depth = 0.02
    const doorGeometry = new BoxGeometry(width, height, depth);
    const doorMaterial = new MeshStandardMaterial({color: 0x7f7f7f});
    const door = new Mesh(doorGeometry, doorMaterial);
    door.position.set(-sizes.width/2, -sizes.height/2 + height/2 + 0.05, -sizes.depth/2 + depth/2 + 1 )
    door.rotation.y += Math.PI /2
    scene.add(door);
    return door;
}