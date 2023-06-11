import {AmbientLight, DirectionalLight, RectAreaLight, Scene, SpotLight} from "three";
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import {sizes} from "../constants/sizes.ts";

export const addLight = (scene: Scene) => {
    // равномерный свет просто чтобы всё было освещено хотя бы немного
    const light = new AmbientLight(0x404040, 1);
    scene.add(light);

    const directionalLight = new DirectionalLight(0xffffff, 0.2);
    directionalLight.castShadow = true
    scene.add(directionalLight);

    // функция для добавления лампочек
    const addLamp = (
        from: { x: number, y: number, z: number },
        to: { x: number, y: number, z: number },
        angle: number, penumbra: number, width: number, height: number
    ) => {
        // свет прожектора для лампочки
        const spotLight = new SpotLight(0xffffff, 0.01);
        spotLight.position.set(from.x, from.y, from.z);
        spotLight.target.position.set(to.x, to.y, to.z);
        spotLight.angle = angle; // Угол конуса света
        spotLight.penumbra = penumbra; // Мягкость краев
        spotLight.castShadow = true;
        scene.add(spotLight);
        scene.add(spotLight.target);

        // сама лампочка
        const rectLight = new RectAreaLight(0xffffff, 0.8, width, height);
        rectLight.position.set(from.x, from.y, from.z);
        rectLight.lookAt(to.x, to.y, to.z);
        scene.add(rectLight)
        const rectLightHelper = new RectAreaLightHelper(rectLight);
        rectLight.add(rectLightHelper);
    }

    // добавление лампочек
    for (let i = -2; i < 4; i++)
        for (let j = -sizes.width / Math.floor(sizes.width / 2) / 2; j < Math.floor(sizes.width / 2); j += 2.5)
            addLamp(
                {x: j, y: 1.44, z: i * (sizes.height - 0.1) / 2},
                {x: j, y: -2, z: i * (sizes.height - 0.1) / 2},
                Math.PI / 3, 0.5, 0.8, 0.8)



}