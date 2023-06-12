import {addLight} from "./utils/addLight.ts";
import {createAudience} from "./utils/createAudience.ts";
import {createControls} from "./utils/createControls.ts";
import {addWhiteboard} from "./utils/addWhiteboard.ts";
import {generateChairs} from "./utils/generateChairs.ts";
import {camera, renderer, scene} from "./utils/init.ts";

const controls = createControls()
createAudience()
await generateChairs()
addLight()
addWhiteboard()

// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    controls.update()

    renderer.render(scene, camera);
}

animate();
