import {AmbientLight, Color, DirectionalLight, RectAreaLight, SpotLight} from "three";
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import {sizes} from "../constants/sizes.ts";
import {scene} from "./init.ts";
import {grassMaterial, skyMaterial} from "./createWorldAround.ts";

// функция для добавления лампочек
const createLamp = (
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
    return {spotLight, rectLight}
}

const directionalLight = new DirectionalLight(0xffffff, 0.4);
directionalLight.castShadow = true
const light = new AmbientLight(0x404040, 0.5);
scene.add(light);

const lamps: { spotLight: SpotLight, rectLight: RectAreaLight }[] = []
for (let i = -2; i < 4; i++)
    for (let j = -sizes.width / Math.floor(sizes.width / 2) / 2; j < Math.floor(sizes.width / 2); j += 2.5)
        lamps.push(createLamp(
            {x: j, y: 1.44, z: i * (sizes.height - 0.1) / 2},
            {x: j, y: -2, z: i * (sizes.height - 0.1) / 2},
            Math.PI / 3, 0.5, 0.8, 0.8))

let lightsAdded = false;

const addLight = () => {
    scene.add(directionalLight);
    lamps.forEach(lamp => {
        scene.add(lamp.spotLight)
        scene.add(lamp.spotLight.target)
        scene.add(lamp.rectLight)
    })
    grassMaterial.color = new Color(1, 1, 1);
    skyMaterial.color = new Color(1, 1, 1)
    lightsAdded = true;
}

const removeLight = () => {
    if (lightsAdded) {
        scene.remove(directionalLight);
        lamps.forEach(lamp => {
            scene.remove(lamp.spotLight)
            scene.remove(lamp.spotLight.target)
            scene.remove(lamp.rectLight)
        })
        grassMaterial.color = new Color(0.01, 0.01, 0.01);
        skyMaterial.color = new Color(0.01, 0.01, 0.01)
        lightsAdded = false;
    }
}

export const toggleLight = () => {
    if (lightsAdded) {
        removeLight(); // Если свет включен, выключаем его
    } else {
        addLight(); // Если свет выключен, включаем его
    }
}
