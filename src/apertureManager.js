import { Graphics } from "pixi.js"; 

export function apertureManager(app, veil) {
    const width = Math.max(75, Math.random() * 300);
    const height = Math.max(75, Math.random() * 300);

    const frame = new Graphics()
        .rect(0, 0, width, height)
        .fill("#060809");
    frame.label = "frame";
    
    frame.x = Math.random() * (app.screen.width - width);
    frame.y = Math.random() * (app.screen.height - height);

    veil.setMask({
        mask: frame,
        inverse: true,
    });

    app.stage.addChild(frame);
}
