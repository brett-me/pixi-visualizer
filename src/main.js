import { setupApp } from "./setupApp";
import { loadAssets } from "./loadAssets";
import { animateBackground } from "./animateBackground";


(async () => {
    const app = await setupApp();
    const { bg1, bg2, bg3 } = await loadAssets();

    animateBackground(app, bg1, bg2, bg3);

})();