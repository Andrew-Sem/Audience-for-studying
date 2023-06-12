import {BackSide, Mesh, MeshBasicMaterial, SphereGeometry, TextureLoader} from "three";
import {scene} from "./init.ts";

const loader = new TextureLoader();
const grassTexture = loader.load('/grass.jpeg');
const skyTexture = loader.load('/sky.jpeg');
export const grassMaterial = new MeshBasicMaterial({ map: grassTexture, side: BackSide });
export const skyMaterial = new MeshBasicMaterial({ map: skyTexture, side: BackSide });

export const createWorldAround = () => {
    const geometry = new SphereGeometry(50, 64, 64, 0, Math.PI *2, 0, Math.PI / 2);

    const grassHalfSphere = new Mesh(geometry, grassMaterial);
    const skyHalfSphere = new Mesh(geometry, skyMaterial);
    grassHalfSphere.position.y =- 20
    skyHalfSphere.position.y =- 20
    grassHalfSphere.rotation.x = Math.PI;

    scene.add(skyHalfSphere);
    scene.add(grassHalfSphere);
}