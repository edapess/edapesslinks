const body = document.querySelector('body');
const vanta = document.querySelector('#vanta');
const bgs = ["./assets/bgArm.jpg", "./assets/bgArm1.jpg", "./assets/bgArm2.jpg", "./assets/bgArm3.jpg", "./assets/bgArm4.jpg", "./assets/bgArm5.jpg", "./assets/bgArm6.jpg", "./assets/bgArm7.jpg", "./assets/bgArm8.jpg", "./assets/bgArm9.jpg",]
let index = 0;
const changeBg = () => {
  body.style.background = `url(${bgs[index]}) repeat center center fixed`;
  index++
  if (index > bgs.length) {
    index = 0;
  }
}

setInterval(changeBg, 10000)
