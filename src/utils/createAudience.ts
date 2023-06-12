import {BoxGeometry, DoubleSide, Mesh, MeshPhongMaterial, Scene} from "three";
import {sizes} from "../constants/sizes.ts";
import {CSG} from "three-csg-ts";


export const createAudience = (width: number, height: number, length: number, scene: Scene) => {
    // Создание геометрий для стен, пола и потолка
    const wallGeometry = new BoxGeometry(width, height, 0.01);
    const floorGeometry = new BoxGeometry(width, 0.01, length);
    const ceilingGeometry = new BoxGeometry(width, 0.01, length);

    // Создание материалов для стен, пола и потолка
    const wallMaterial = new MeshPhongMaterial({color: 0xeeeeee, side: DoubleSide});
    const floorMaterial = new MeshPhongMaterial({color: 0xaaaaaa});
    const ceilingMaterial = new MeshPhongMaterial({color: 0xdddddd});

    // Создание мешей (объектов) для стен, пола и потолка
    const walls = new Mesh(wallGeometry, wallMaterial);
    const floor = new Mesh(floorGeometry, floorMaterial);
    const ceiling = new Mesh(ceilingGeometry, ceilingMaterial);

    walls.receiveShadow = true;
    floor.receiveShadow = true;
    ceiling.receiveShadow = true;


    // Установка позиций для стен, пола и потолка
    walls.position.set(0, 0, -length / 2);
    floor.position.set(0, -height / 2, 0);
    ceiling.position.set(0, height / 2, 0);

    // Создание геометрий для дополнительных стен
    const additionalWallGeometry1 = new BoxGeometry(0.1, height, length);
    const additionalWallGeometry2 = new BoxGeometry(width, height, 0.1);
    const additionalWallGeometry3 = new BoxGeometry(0.1, height, length);

    // Создание мешей для дополнительных стен
    const additionalWalls1 = new Mesh(additionalWallGeometry1, wallMaterial);
    const additionalWalls2 = new Mesh(additionalWallGeometry2, wallMaterial);
    const additionalWalls3 = new Mesh(additionalWallGeometry3, wallMaterial);

    additionalWalls1.receiveShadow = true;
    additionalWalls2.receiveShadow = true;
    additionalWalls3.receiveShadow = true;

    // Установка позиций для дополнительных стен
    additionalWalls1.position.set(width / 2, 0, 0);
    additionalWalls2.position.set(0, 0, length / 2);
    additionalWalls3.position.set(-width / 2, 0, 0);

    // Добавление стен, пола и потолка в сцену
    scene.add(walls);
    scene.add(floor);
    scene.add(ceiling);
    scene.add(additionalWalls1);
    scene.add(additionalWalls2);
    scene.add(additionalWalls3);

    // Добавьте код для создания света и мебели в комнате

    // Возвращаем объект комнаты
    const room = {
        walls,
        floor,
        ceiling,
        additionalWalls1,
        additionalWalls2,
        additionalWalls3,
        // Добавьте другие элементы комнаты, если необходимо
    };

    const addWindow = (width: number, height: number, depth: number, x: number, y: number, z: number, opacity: number): Mesh => {
        const windowGeometry = new BoxGeometry(width, height, depth)
        const windowMaterial = new MeshPhongMaterial({
            transparent: true,
            opacity,
            side: DoubleSide
        })

        const windowMesh = new Mesh(windowGeometry, windowMaterial)
        windowMesh.position.set(x, y, z)
        scene.add(windowMesh)

        return windowMesh
    }

    const substractWall = (wall: Mesh, window: Mesh): Mesh => {
        const wallCSG = CSG.fromMesh(wall);
        const windowCSG = CSG.fromMesh(window);

        const substractedCSG = wallCSG.subtract(windowCSG);
        const newWall = CSG.toMesh(substractedCSG, wall.matrix, wall.material);
        scene.remove(wall);
        scene.add(newWall);
        return newWall;
    };


    const window = addWindow(0.1, 1.5, 1.5, width/2, 0, 0, 0.2)

    const newWall = substractWall(additionalWalls1, window)
    newWall.position.x += sizes.width / 2

    return room;
};
