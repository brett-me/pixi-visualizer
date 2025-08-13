import { scaleToWindow } from "./utils/scaleToWindow";

export async function startAnimation(app, bg1, bg2, bg3) {
    app.ticker.add((time) => {
        const dx = time.deltaMS * 0.05;

        bg1.x -= dx;
        bg2.x -= dx;
        bg3.x -= dx;

        if (bg1.x <= -app.screen.width) {
            bg1.x += app.screen.width * 3;
        }
        if (bg2.x <= -app.screen.width) {
            bg2.x += app.screen.width * 3;
        }
        if (bg3.x <= -app.screen.width) {
            bg3.x += app.screen.width * 3;
        }
    });

}