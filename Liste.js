// Ermöglicht, dass ein Element beim Anklicken als "Erledigt" angezeigt wird
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') 
  {
    ev.target.classList.toggle('checked');
  }
}, false);

//Ermöglicht es, die Hintergrundfarbe zu bestimmen
function rgbfarben() {
  var rot= document.form.rfeld.value;
  var gruen = document.form.gfeld.value;
  var blau = document.form.bfeld.value;
  document.getElementsByTagName("body")[0].style.backgroundColor = "rgb("+ rot +"%,"+ gruen +"%, " +blau+"%)";
  }

  
  