const DRAW_CALLS_PER_RENDER = 500;

export const awaitNextTick = (i) =>
  i % DRAW_CALLS_PER_RENDER === 0
    ? new Promise((res) => requestAnimationFrame(res))
    : undefined;
