export const validWalk = (walk: string[]): boolean => {
  const north: number = walk.filter(item => { return item === "n" }).length;
  const south: number = walk.filter(item => { return item === "s" }).length;
  const east: number = walk.filter(item => { return item === "e" }).length;
  const west: number = walk.filter(item => { return item === "w" }).length;
  return walk.length === 10 && north === south && east === west;
}