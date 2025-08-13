import { scaleToWindow } from "./utils/scaleToWindow";

export async function startAnimation(app, bg1, bg2, bg3, veil, frame) {
    // Cooldown tracking
    const COOLDOWN_MS = 2000; // Minimum time between repositionings
    let lastReposition = 0;
    
    // Find the rightmost background edge
    function getRightmostBackground() {
        return Math.max(
            bg1.x + bg1.width,
            bg2.x + bg2.width,
            bg3.x + bg3.width
        );
    }

    app.ticker.add((time) => {
        const currentTime = Date.now();
        const dx = time.deltaMS * 0.05;
        const screenWidth = app.screen.width;
        const screenHeight = app.screen.height;

        // Move backgrounds
        bg1.x -= dx;
        bg2.x -= dx;
        bg3.x -= dx;

        // Background wrapping
        if (bg1.x <= -screenWidth) bg1.x += screenWidth * 3;
        if (bg2.x <= -screenWidth) bg2.x += screenWidth * 3;
        if (bg3.x <= -screenWidth) bg3.x += screenWidth * 3;

        // Calculate edges
        const frameEdge = frame.x + frame.width;
        const bgEdge1 = bg1.x + bg1.width;
        const bgEdge2 = bg2.x + bg2.width;
        const bgEdge3 = bg3.x + bg3.width;
        const bgRightmost = getRightmostBackground();

        // Original trigger condition with cooldown
        if ((bgEdge1 <= frameEdge || bgEdge2 <= frameEdge || bgEdge3 <= frameEdge) && 
            currentTime - lastReposition > COOLDOWN_MS) {
            
            lastReposition = currentTime;
            
            // Calculate new frame size
            const width = (screenWidth * 0.05) + (Math.random() * screenWidth * 0.15);
            const height = (screenHeight * 0.05) + (Math.random() * screenHeight * 0.15);

            // update frame size
            frame.width = width;
            frame.height = height;
            
            // Ensure new position is safe (left of rightmost background)
            const maxX = Math.min(
                screenWidth - width,
                bgRightmost - width - 50 // Safety buffer
            );
            
            // Only reposition if safe position exists
            if (maxX > 0) {
                frame.x = Math.random() * maxX;
                frame.y = Math.random() * (screenHeight - height);
            }
        }
    });
}