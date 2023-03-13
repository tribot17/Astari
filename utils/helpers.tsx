export function darkenColor(hex, amount) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  r = Math.max(r - amount, 0);
  g = Math.max(g - amount, 0);
  b = Math.max(b - amount, 0);

  let darkenedHex = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  return darkenedHex;
}
