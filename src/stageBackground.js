import { scaleToWindow } from "./utils/scaleToWindow";

export function stageBackground(app, bg1, bg2, bg3) {
    scaleToWindow(app, bg1, bg2, bg3);
    bg2.x = app.screen.width;
    bg3.x = app.screen.width * 2;
    app.stage.addChild(bg1, bg2, bg3);
}