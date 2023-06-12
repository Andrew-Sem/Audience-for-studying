import {BoxGeometry, DoubleSide, Mesh, MeshPhongMaterial} from "three";
import {sizes} from "../constants/sizes.ts";
import {CSG} from "three-csg-ts";
import {scene} from "./init.ts";

const addWindow = (width: number, height: number, depth: number, x: number, y: number, z: number, opacity: number): Mesh => {
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

const substractWall = (wall: Mesh, window: Mesh): Mesh => {
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

const createMesh = (x: number, y: number, z: number, width: number, height: number, depth: number, material: MeshPhongMaterial): Mesh => {
    const meshGeometry = new BoxGeometry(width, height, depth);
    const mesh = new Mesh(meshGeometry, material);
    mesh.position.set(x, y, z);
    mesh.receiveShadow = true;
    scene.add(mesh)
    return mesh;
};

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

    const window = addWindow(0.1, 1.5, 1, sizes.width/2, 0, 2, 0.2);
    walls[1] = substractWall(walls[1], window);

};
