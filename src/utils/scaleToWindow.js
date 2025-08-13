export function scaleToWindow(app, ...objs) {
    if (objs.length === 1 && Array.isArray(objs[0])) {
        objs = objs[0];
    }

    function resize() {
        objs.forEach(obj => {
            obj.width = app.renderer.width;
            obj.height = app.renderer.height;
        });
    }

    resize();

    window.addEventListener("resize", () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });
}
