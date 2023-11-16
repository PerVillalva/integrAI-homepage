import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function cloneElements() {
  const integrationRows = document.querySelectorAll('.integrations-row');

  integrationRows.forEach((row) => {
    const rowClone = row.cloneNode(true);
    row.append(rowClone);
  });
}

export function infiniteRollAnimation(
  selector: gsap.TweenTarget,
  direction: string,
  duration: number
) {
  cloneElements();
  const isLeft = direction === 'left';
  gsap.to(selector, {
    x: (index, target) => (isLeft ? -target.offsetWidth : target.offsetWidth),
    ease: 'linear', // Use a linear ease for a smooth constant movement
    repeat: -1, // Repeat the animation indefinitely
    duration: duration, // Duration of one cycle (adjust as needed)
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % window.innerWidth), // Reset the position after each cycle
    },
  });
}
