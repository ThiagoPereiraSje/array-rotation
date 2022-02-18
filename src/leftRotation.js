export function leftRotation(a = [], d = 0) {
  let rotations = 0;

  if (d >= a.length) {
    rotations = a.length % d;
  } else {
    rotations = d;
  }

  if (rotations === 0) {
    return a;
  }

  const p1 = a.slice(0, rotations);
  const p2 = a.slice(rotations);
  const result = [].concat(p2, p1);

  return result.join(" ");
}
