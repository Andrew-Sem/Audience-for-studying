import {addLight} from "./utils/addLight.ts";
import {loadObject} from "./utils/loadObject.ts";
import {init} from "./utils/init.ts";
import {createAudience} from "./utils/createAudience.ts";
import {createControls} from "./utils/createControls.ts";
import {sizes} from "./constants/sizes.ts";
import {addWhiteboard} from "./utils/addWhiteboard.ts";

const {scene, camera, renderer} = init()
const controls = createControls(camera, renderer)

createAudience(sizes.width, sizes.height, sizes.length, scene)
const chair = await loadObject("/chair.glb", scene)
chair.position.y = -sizes.height/2 + 0.01
chair.scale.set(0.5, 0.5, 0.5)
addLight(scene)
addWhiteboard(scene)


// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    controls.update()

    renderer.render(scene, camera);
}

animate();
