import { infiniteRollAnimation } from '$utils/scroll';

export function animations() {
  // Run Integrations-section animation on Desktop-only
  const breakpoint = 768; // For example, 768px for tablets

  function runInfiniteRollAnimations() {
    if (window.innerWidth > breakpoint) {
      // Only run animations if the window width is greater than the breakpoint
      infiniteRollAnimation('.integrations-row:nth-child(1)', 'left', 300);
      infiniteRollAnimation('.integrations-row:nth-child(2)', 'right', 350);
      infiniteRollAnimation('.integrations-row:nth-child(3)', 'left', 300);
    }
  }

  runInfiniteRollAnimations(); // Run on initial page load

  window.addEventListener('resize', function () {
    runInfiniteRollAnimations(); // Run on window resize
  });

  // Background Glow mouse animation
  const handleMouseMovement = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;

    if (target) {
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty('--mouse-x', `${x}px`);
      target.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  for (const card of document.querySelectorAll('.card_container-showcase')) {
    (card as HTMLElement).onmousemove = (e) => handleMouseMovement(e);
  }
}
