const videoclip = document.querySelectorAll(".videoclip");
for (let i = 0; i < videoclip.length; i++) {
  videoclip[i].addEventListener("mouseenter", function (e) {
    videoclip[i].play();
  });
  videoclip[i].addEventListener("mouseout", function (e) {
    videoclip[i].pause();
  });
}

const myfunction = () => {
  toggle = !toggle;
  if (toggle === true) {
    document.getElementById("explore2").style.left = "0";
  } else {
    document.getElementById("explore2").style.left = "-100%";
  }
};
let toggle = false;
