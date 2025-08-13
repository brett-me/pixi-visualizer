import { setupApp } from "./setupApp";
import { loadAssets } from "./loadAssets";
import { animateBackground } from "./animateBackground";
import { overlay } from "./overlay";
import { apertureManager } from "./apertureManager";


(async () => {
    const app = await setupApp();
    const { bg1, bg2, bg3 } = await loadAssets();

    animateBackground(app, bg1, bg2, bg3);
    
    const veil = overlay(app);

    apertureManager(app, veil);


})();