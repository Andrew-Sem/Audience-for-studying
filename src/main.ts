import {addLight} from "./utils/addLight.ts";
import {loadObject} from "./utils/loadObject.ts";
import {init} from "./utils/init.ts";
import {createAudience} from "./utils/createAudience.ts";
import {createControls} from "./utils/createControls.ts";
import {sizes} from "./constants/sizes.ts";

const {scene, camera, renderer} = init()
const controls = createControls(camera, renderer)

createAudience(sizes.width, sizes.height, sizes.length, scene)
const chair = await loadObject("/chair.glb", scene)
chair.position.y = -sizes.height/2
addLight(scene)



// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    controls.update()

    renderer.render(scene, camera);
}

animate();
