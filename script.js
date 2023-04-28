let navigate = document.getElementById('navigate')

function on() {
   navigate.style.opacity = "1";
   navigate.style.zIndex = "100";
   navigate.style.top = "calc(100% + 1px)";
} 
function off() {
   navigate.style.opacity = "0";
   navigate.style.zIndex = "-1";
   navigate.style.top = "calc(100% + 50px)";
} 

