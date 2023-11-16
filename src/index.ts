import { animations } from '$utils/animations';
import { charts } from '$utils/charts';
import { clibpboardInteractions } from '$utils/clipboard';
import { navbarInteractions } from '$utils/navbar';

window.Webflow ||= [];
window.Webflow.push(() => {
  animations();
  charts();
  navbarInteractions();
  clibpboardInteractions();
});
