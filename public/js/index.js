
function openNav1() {

  if(document.getElementById("mySidenav1").style.width === "0%" && document.getElementById("main").style.marginLeft === "0%"){
    document.getElementById("mySidenav1").style.width = "25%";
    document.getElementById("main").style.marginLeft= "25%";
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

// //Date picker
// let startDate = document.getElementById('startDate')

// startDate.addEventListener('change',(e)=>{
//   let startDateVal = e.target.value
//   document.getElementById('startDateSelected').innerText = startDateVal
// })
