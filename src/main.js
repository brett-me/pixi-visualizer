import * as PIXI from "pixi.js";
import { setupApp } from "./setupApp";
import { loadAssets } from "./loadAssets";

(async () => {
    const app = await setupApp();
    const { bg1, bg2, bg3 } = await loadAssets();
    app.stage.addChild(bg1);
})();