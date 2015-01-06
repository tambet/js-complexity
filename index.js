function main() {
  return 'Hello, World!';
}

function main2(a, b, c) {
  return a || b || c;
}

function duplicate(d, e, f) {
  return d || e || f;
}

main();
main2(1, 2, 3);
duplicate(4, 5, 6);
