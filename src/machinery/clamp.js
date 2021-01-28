export function clamp({ min, max, input }) {
  return Math.min(max, Math.max(min, input))
}
