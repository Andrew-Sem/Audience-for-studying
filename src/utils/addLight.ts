import {AmbientLight, DirectionalLight, RectAreaLight, Scene, SpotLight} from "three";
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export const addLight = (scene: Scene) => {
    // равномерный свет просто чтобы всё было освещено хотя бы немного
    const light = new AmbientLight(0x404040, 1);
    scene.add(light);

    const directionalLight = new DirectionalLight(0xffffff, 0.2);
    directionalLight.castShadow = true
    scene.add(directionalLight);

    const width = 0.8;
    const height = 0.8;
    const intensity = 1;

    for (let i = 0; i < 4; i++) {
        const rectLight = new RectAreaLight(0xffffff, intensity, width, height);
        rectLight.position.set(1, 1.44, i * 1.5);
        rectLight.lookAt(1, -2, i * 1.5);
        scene.add(rectLight)
        const rectLightHelper = new RectAreaLightHelper(rectLight);
        rectLight.add(rectLightHelper);
    }

    for (let i = 0; i < 4; i++) {
        const rectLight = new RectAreaLight(0xffffff, intensity, width, height);
        rectLight.position.set(-1, 1.44, i * 1.5);
        rectLight.lookAt(-1, -2, i * 1.5);
        scene.add(rectLight)
        const rectLightHelper = new RectAreaLightHelper(rectLight);
        rectLight.add(rectLightHelper);
    }

    function addSpotLight(
        from: { x: number, y: number, z: number },
        to: { x: number, y: number, z: number },
        angle: number, penumbra: number
    ) {
        const spotLight = new SpotLight(0xffffff, 0.01);
        spotLight.position.set(from.x, from.y, from.z);
        spotLight.target.position.set(to.x, to.y, to.y);
        spotLight.angle = angle; // Угол конуса света
        spotLight.penumbra = penumbra; // Мягкость краев
        spotLight.castShadow = true;
        scene.add(spotLight);
        scene.add(spotLight.target);
    }

    // Добавление SpotLight для каждого RectAreaLight
    for (let i = 0; i < 4; i++) {
        addSpotLight({x: 1, y: 1.44, z: i * 1.5}, {x: -1, y: -2, z: i * 1.5}, Math.PI / 4, 0.2);
    }

    for (let i = 0; i < 4; i++) {
        addSpotLight({x: -1, y: 1.44, z: i * 1.5}, {x: 1, y: -2, z: i * 1.5}, Math.PI / 4, 0.2);
    }

}