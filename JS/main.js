var x = document.getElementById("menu");
var menu = false ;

function navbar() {
    menu = true;
    if (x.style.display === "flex")  {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      menu = false;
    }
  }

  window.onresize = doALoadOfStuff;

function doALoadOfStuff() {
    if (window.innerWidth < 768 ) {
        x.style.display === "flex"
    }
    if (window.innerWidth > 768 ) {
      x.style.display = "flex"
    }

}