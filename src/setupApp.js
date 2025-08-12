import { Application } from "pixi.js";

export async function setupApp() {
    const app = new Application();
    await app.init({
        resizeTo: window,
        backgroundColor: "#000",
        hello: true,
    });
    document.body.appendChild(app.canvas);
    
    if (location.hostname === "localhost") {
        const { initDevtools } = await import("@pixi/devtools");
        initDevtools({ app });
        window.__PIXI_APP__ = app;
    };

    return app;
}