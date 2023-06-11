import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {Scene} from "three";


export const loadModel = (path: string, scene: Scene) => {
    const loader = new GLTFLoader()

    loader.load(path, (gltf) => {
        scene.add(gltf.scene)
    }), undefined, (error: any) => {

        console.error(error);

    }
}
