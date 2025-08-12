import * as PIXI from "pixi.js";
import { setupApp } from "./setupApp";
import { loadAssets } from "./loadAssets";
import { scaleToWindow } from "./utils/scaleToWindow";


(async () => {
    const app = await setupApp();
    const { bg1, bg2, bg3 } = await loadAssets();
    scaleToWindow(app, bg1);
    app.stage.addChild(bg1);

})();