const lineDisplayChar = ['\r|', '\r/', '\r-', '\r\\','\r|'];

let timer = 0;
let repeater = 0;
while (repeater < 2) {
  for (const char of lineDisplayChar) {
    setTimeout(
      () => {
        process.stdout.write(char);
      },timer);
    timer = timer + 100;
  }
  repeater++;
}