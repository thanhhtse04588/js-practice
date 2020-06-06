//    *
//   ***
//  *****
// *******
function makeLine(space, star) {
  let line = "";
  for (let i = 0; i < space; i++) {
    line += " ";
  }

  for (let i = 0; i < star; i++) {
    line += "*";
  }
  return line;
}

function run(size) {
  let star = 1;
  for (let i = size - 1; i >= 0; i--) {
    console.log(makeLine(i, star));
    star += 2;
  }
}
