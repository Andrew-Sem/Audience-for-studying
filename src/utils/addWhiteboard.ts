import {LinearFilter, Mesh, MeshBasicMaterial, PlaneGeometry, Scene, TextureLoader} from "three";
import {sizes} from "../constants/sizes.ts";

export const addWhiteboard = (scene: Scene) => {
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load("/whiteboard.png");

    // Установка метода фильтрации текстуры
    texture.minFilter = LinearFilter;

    // Создание материала с текстурой
    const imageMaterial = new MeshBasicMaterial({map: texture});

    // Создание геометрии для плоскости с изображением
    const imageGeometry = new PlaneGeometry(sizes.width / 1.8, sizes.height / 1.8, );

    // Создание меша с плоскостью и применение материала
    const imagePlane = new Mesh(imageGeometry, imageMaterial);

    // Установка позиции для плоскости с изображением
    imagePlane.position.set(0, 0, -sizes.length / 2+1);

    // Добавление плоскости с изображением в сцену
    scene.add(imagePlane);
}