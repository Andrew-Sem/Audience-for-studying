import { BoxGeometry, Mesh, MeshBasicMaterial, Scene, BackSide } from "three";

export const createAudience = (scene: Scene):Mesh => {
    const geometry = new BoxGeometry(10, 10, 10);
    const material = new MeshBasicMaterial({ color: "#00ff00", side: BackSide }); // Render material on the inside
    const cube = new Mesh(geometry, material);
    scene.add(cube);
    return cube
};
