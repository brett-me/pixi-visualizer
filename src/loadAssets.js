import { Assets, Sprite } from "pixi.js";

export async function loadAssets() {
    const textures = await Assets.load([
        { alias: "bg1", src: "/bg-images/bg1.jpg" },
        { alias: "bg2", src: "/bg-images/bg2.jpg" },
        { alias: "bg3", src: "/bg-images/bg3.jpg" }
    ]);

    const bg1 = new Sprite(textures.bg1);
    const bg2 = new Sprite(textures.bg2);
    const bg3 = new Sprite(textures.bg3);

    return {
        bg1, 
        bg2, 
        bg3
    };
}