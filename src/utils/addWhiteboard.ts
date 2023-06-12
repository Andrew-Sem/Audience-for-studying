import {LinearFilter, Mesh, MeshBasicMaterial, PlaneGeometry, TextureLoader} from "three";
import {sizes} from "../constants/sizes.ts";
import {scene} from "./init.ts";

export const addWhiteboard = () => {
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load("/whiteboard.png");

    // Установка метода фильтрации текстуры
    texture.minFilter = LinearFilter;

    // Создание материала с текстурой
    const imageMaterial = new MeshBasicMaterial({map: texture});

    // Создание геометрии для плоскости с изображением
    const imageGeometry = new PlaneGeometry(sizes.width / 2, sizes.height / 2, );

    // Создание меша с плоскостью и применение материала
    const imagePlane = new Mesh(imageGeometry, imageMaterial);

    // Установка позиции для плоскости с изображением
    imagePlane.position.set(-0.8, 0, -sizes.depth / 2 + 0.1);

    // Добавление плоскости с изображением в сцену
    scene.add(imagePlane);
}