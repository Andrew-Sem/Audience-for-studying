import { BoxGeometry, Mesh, MeshPhongMaterial, Scene } from "three";

export const createAudience = (width: number, height: number, length: number, scene: Scene) => {
    // Создание геометрий для стен, пола и потолка
    const wallGeometry = new BoxGeometry(width, height, 0.1);
    const floorGeometry = new BoxGeometry(width, 0.1, length);
    const ceilingGeometry = new BoxGeometry(width, 0.1, length);

    // Создание материалов для стен, пола и потолка
    const wallMaterial = new MeshPhongMaterial({ color: 0xeeeeee });
    const floorMaterial = new MeshPhongMaterial({ color: 0xaaaaaa });
    const ceilingMaterial = new MeshPhongMaterial({ color: 0xdddddd });

    // Создание мешей (объектов) для стен, пола и потолка
    const walls = new Mesh(wallGeometry, wallMaterial);
    const floor = new Mesh(floorGeometry, floorMaterial);
    const ceiling = new Mesh(ceilingGeometry, ceilingMaterial);

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

    // Установка позиций для дополнительных стен
    additionalWalls1.position.set(width / 2,  0, 0);
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

    return room;
};
