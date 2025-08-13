import { setupApp } from "./setupApp";
import { loadAssets } from "./loadAssets";
import { startAnimation } from "./startAnimation";
import { overlay } from "./overlay";
import { apertureManager } from "./apertureManager";
import { stageBackground } from "./stageBackground";


(async () => {
    const app = await setupApp();
    const { bg1, bg2, bg3 } = await loadAssets();
    stageBackground(app, bg1, bg2, bg3);
    const veil = overlay(app);
    apertureManager(app, veil);
    startAnimation(app, bg1, bg2, bg3);
})();