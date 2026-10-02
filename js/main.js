window.addEventListener('load', () => {
  window.setTimeout(() => {
    document.body.classList.remove('not-loaded');
    // Wait for every growth animation, excluding the continuous swaying and lights.
    requestAnimationFrame(() => {
      const flowers = document.querySelector('.flowers');
      const growthAnimations = flowers.getAnimations({ subtree: true }).filter(
        animation => Number.isFinite(animation.effect.getTiming().iterations)
      );
      Promise.allSettled(growthAnimations.map(animation => animation.finished)).then(() => {
        document.body.classList.add('gift-ready');
      });
    });
  }, 1000);
});
