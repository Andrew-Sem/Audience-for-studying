import {addLight} from "./utils/addLight.ts";
import {init} from "./utils/init.ts";
import {createAudience} from "./utils/createAudience.ts";
import {createControls} from "./utils/createControls.ts";
import {sizes} from "./constants/sizes.ts";
import {addWhiteboard} from "./utils/addWhiteboard.ts";
import {generateChairs} from "./utils/generateChairs.ts";

const {scene, camera, renderer} = init()
const controls = createControls(camera, renderer)

createAudience(sizes.width, sizes.height, sizes.length, scene)
await generateChairs(scene)
addLight(scene)
addWhiteboard(scene)


// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    controls.update()

    renderer.render(scene, camera);
}

animate();
