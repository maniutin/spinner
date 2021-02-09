const spinnerCircle = "|/-\\|-\\|";
let speed = 100;
for (let i = 0; i < spinnerCircle.length; i++) {
  setTimeout(() => process.stdout.write('\r' + spinnerCircle[i] + ' '), speed += 200);
}