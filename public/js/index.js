
function openNav() {

  if(document.getElementById("mySidenav").style.width === "0%" && document.getElementById("main").style.marginLeft === "0%"){
    document.getElementById("mySidenav").style.width = "40%";
    document.getElementById("main").style.marginLeft= "40%";
  }
  else{
  document.getElementById("mySidenav").style.width = "0%";
  document.getElementById("main").style.marginLeft = "0%";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("HeadingOfThePage").style.margin= "0rem 0rem 0rem 0rem";
}


// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }


/* --- Show DIV --- */
$( '.example' ).removeClass( 'fadeOutRight' ).show().addClass( 'fadeInRight' );

/* --- Hide DIV --- */
$( '.example' ).removeClass( 'fadeInRight' ).addClass( 'fadeOutRight' );