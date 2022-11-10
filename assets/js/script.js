window.onload = function(){
  document.querySelector(".menu-opener").addEventListener("click", function(){
    if(document.querySelector(".menu nav ul").style.display == 'flex'){
        document.querySelector(".menu nav ul").style.display = 'none';
    } else {
      document.querySelector(".menu nav ul").style.display = 'flex';
    }
  })
}

function clickTop(){
  windows.scrollTo(0, 0)
}
