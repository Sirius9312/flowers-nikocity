export function getPages (min: number, max: number) {
  const pages = [];

  for (let i = min; i <= max; i++) {
    pages.push(i);
  }

  return pages;
}
