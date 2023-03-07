
function openNav1() {

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

// //Date picker
// let startDate = document.getElementById('startDate')

// startDate.addEventListener('change',(e)=>{
//   let startDateVal = e.target.value
//   document.getElementById('startDateSelected').innerText = startDateVal
// })
