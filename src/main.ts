import {addLight} from "./utils/addLight.ts";
import {loadObject} from "./utils/loadObject.ts";
import {init} from "./utils/init.ts";

const {scene, camera, renderer} = init()

const chair = await loadObject("/chair.glb", scene)

addLight(scene)

// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    chair.rotation.y += 0.01

    renderer.render(scene, camera);
}

animate();
