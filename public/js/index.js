
function openNav1() {

  if(document.getElementById("mySidenav1").style.width === "0%" && document.getElementById("main").style.marginLeft === "0%"){
    document.getElementById("mySidenav1").style.width = "35%";
    document.getElementById("main").style.marginLeft= "35%";
  }
  else{
  document.getElementById("mySidenav1").style.width = "0%";
  document.getElementById("main").style.marginLeft = "0%";
  }
}

function closeNav() {
  document.getElementById("mySidenav1").style.width = "0%";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("HeadingOfThePage").style.margin= "0rem 0rem 0rem 0rem";
}
