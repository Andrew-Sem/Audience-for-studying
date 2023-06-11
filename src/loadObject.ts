import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {Object3D, Scene} from "three";


export const loadObject = (path: string, scene:Scene): Promise<Object3D> => {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            path,
            (gltf) => {
                const loadedObject = gltf.scene;
                resolve(loadedObject);
                scene.add(loadedObject)
            },
            undefined,
            (error: any) => {
                console.error(error);
                reject(error);
            }
        );
    });
}
