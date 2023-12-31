import {toggleLight} from "./utils/addLight.ts";
import {createAudience} from "./utils/createAudience.ts";
import {createControls} from "./utils/createControls.ts";
import {addWhiteboard} from "./utils/addWhiteboard.ts";
import {generateChairs} from "./utils/generateChairs.ts";
import {camera, renderer, scene} from "./utils/init.ts";
import {generateTables} from "./utils/generateTables.ts";
import {createProjector} from "./utils/createProjector.ts";
import {createWorldAround} from "./utils/createWorldAround.ts";

const controls = createControls()
createAudience()
generateChairs()
generateTables()
addWhiteboard()
createProjector()
toggleLight()
createWorldAround()

const toggleLightButton = document.getElementById('button');
toggleLightButton?.addEventListener('click', toggleLight);

// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    controls.update()

    renderer.render(scene, camera);
}

animate();
