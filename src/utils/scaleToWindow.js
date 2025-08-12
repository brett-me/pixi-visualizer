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

    // let resizeTimeout;
    window.addEventListener("resize", () => {
        // clearTimeout(resizeTimeout);
        // resizeTimeout = setTimeout(() => {
            app.renderer.resize(window.innerWidth, window.innerHeight);
            // resize();
        // }, 100);
    });
}
