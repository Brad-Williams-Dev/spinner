const spinnerAnimation = () => {
  let counter = 0;
  let animCounter = 0;
  let anim = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
  for (const item of anim) {
    setTimeout(() => {
      process.stdout.write(`\r${anim[animCounter]}   `);
      animCounter++;
    }, counter);
    counter += 200;
  }
  setTimeout(() => { console.log('\n'); }, counter);
};

spinnerAnimation();