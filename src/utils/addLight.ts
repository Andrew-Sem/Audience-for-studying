import {AmbientLight, DirectionalLight, RectAreaLight, Scene} from "three";
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export const addLight = (scene: Scene) => {
    const light = new AmbientLight(0x404040, 1);
    scene.add(light);

    const directionalLight = new DirectionalLight( 0xffffff, 0.5 );
    directionalLight.castShadow = true
    scene.add( directionalLight );

    const width = 0.8;
    const height = 0.8;
    const intensity = 4;

    for(let i = 0; i < 4; i++) {
        const rectLight = new RectAreaLight( 0xffffff, intensity,  width, height );
        rectLight.position.set( 1, 1.44, i * 1.5  );
        rectLight.lookAt( 1, -2, i * 1.5 );
        scene.add( rectLight )
        const rectLightHelper = new RectAreaLightHelper( rectLight );
        rectLight.add( rectLightHelper );
    }


    for(let i = 0; i < 4; i++) {
        const rectLight = new RectAreaLight( 0xffffff, intensity,  width, height );
        rectLight.position.set( -1, 1.44, i * 1.5  );
        rectLight.lookAt( -1, -2, i * 1.5 );
        scene.add( rectLight )
        const rectLightHelper = new RectAreaLightHelper( rectLight );
        rectLight.add( rectLightHelper );
    }



}