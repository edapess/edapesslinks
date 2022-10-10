    window.addEventListener("DOMContentLoaded", ()=>{
      VANTA.BIRDS({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundAlpha:0.0,
  birdSize: 0.90,
  wingSpan: 15.00,
  separation: 50.00,
  alignment: 23.00,
  cohesion: 40.00,
  color1: 0xe30000,
  color2: 0x83ff,
  colorMode: "variance",
  quantity: 3
})

    })

setInterval(changeMode, 5000)

