let rpa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
             '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var number
function randomNo() {
   return    Math.floor(Math.random()*(rpa.length-0))
}

function myfunc() {
    document.getElementById("f-pass").innerText = rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()];
    document.getElementById("s-pass").innerText = rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()]+rpa[randomNo()];
}

function copyText1() {
    var copy1 = document.getElementById("f-pass").textContent;
   
  navigator.clipboard.writeText(copy1)
  
  alert ("Copied text value   " + copy1)
}

function copyText2() {
  
    var copy2 = document.getElementById("s-pass").textContent;
  
  navigator.clipboard.writeText(copy2)

  alert ("Copied text value   " + copy2)
}

