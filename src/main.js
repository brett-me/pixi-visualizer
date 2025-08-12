import { setupApp } from "./setupApp";
import { animateBackground } from "./animateBackground";


(async () => {
    const app = await setupApp();
    animateBackground(app);

})();