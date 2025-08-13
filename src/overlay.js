import { Graphics } from "pixi.js";
import { scaleToWindow } from "./utils/scaleToWindow";


export function overlay(app) {
    const veil = new Graphics()
        .rect(0, 0, 1920, 1280)
        .fill("#000");
    veil.label = "veil";

    scaleToWindow(app, veil);

    app.stage.addChild(veil);

    return veil;
}