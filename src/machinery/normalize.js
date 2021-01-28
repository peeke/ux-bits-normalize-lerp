export function normalize({ start, end, input }) {
  return (input - start) / (end - start)
}
