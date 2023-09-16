function menu() 
{
    var x = document.getElementById("navbar-links");
    if (x.className === "navbar-links") {
      x.className += " responsive";
    } else {
      x.className = "navbar-links";
    }
}