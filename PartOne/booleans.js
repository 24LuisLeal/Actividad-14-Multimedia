










function setStatus(status){
  var myService = status;
  var text = document.getElementById('servicio');
  
  if (myService) {
    text.className = 'available';
  
  } else {  
    text.className = 'disabled';
  }
}
