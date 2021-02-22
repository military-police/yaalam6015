var x = document.getElementById("test");

function navbar() {
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  window.onresize = doALoadOfStuff;

function doALoadOfStuff() {
    if (window.innerWidth < 768) {
        x.style.display === "flex"
    }
    if (window.innerWidth > 768) {
      x.style.display = "flex"
      console.log('shit')
  }

}