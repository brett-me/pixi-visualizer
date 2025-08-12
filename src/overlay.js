import { Container, Graphics } from "pixi.js";
import { scaleToWindow } from "./utils/scaleToWindow";


export function overlay(app) {
    const container = new Container();
    container.label = "container";

    const veil = new Graphics()
        .rect(0, 0, 1920, 1280)
        .fill("#000");
    veil.label = "veil";
    scaleToWindow(app, veil);

    const width = Math.max(50, Math.random() * 300);
    const height = Math.max(50, Math.random() * 300);

    const frame = new Graphics()
        .rect(0, 0, width, height)
        .fill("#000");
    frame.label = "frame";
    
    frame.x = Math.random() * (app.screen.width - width);
    frame.y = Math.random() * (app.screen.height - height);

    container.setMask({
        mask: frame,
        inverse: true,
    });

    container.addChild(veil, frame);
    app.stage.addChild(container);
}