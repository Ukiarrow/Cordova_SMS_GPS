
var lat = '-33.4349083';
var lon = '-70.6170132';
document.addEventListener("deviceready", onDeviceReady, false);


function showAlert(msj)
{
    navigator.notification.alert(
        msj,  // message
        'UNAB',   // title
        ''    // buttonName
    );
}//fin function mensaje.

// PhoneGap is ready
    function onDeviceReady() 
    {
		// Do cool things here...
      //getPosition();
      if (! SMS ) { alert( 'SMS plugin not ready' ); return; }
      
    }
 


function sendSMS()
{
  var fono = document.getElementById('fono').value;
  var mensajeSMS = document.getElementById('mensajeSMS').value;

  if (fono == '' || mensajeSMS == '')
  {
	  showAlert('Debe Ingresar el Fono!');
  }else
  {
    /* var textoURl = "y no tengo GPS Activado,";
	   if(lat != 0){
		  textoURl = "https://www.google.com/maps?q="+lat+","+lon;
	  } */
    
    var textoURI = mensajeSMS;
	 if(SMS) 
	 {
	   SMS.sendSMS(fono,mensajeSMS, "Esto es una prueba de SMS con Cordova/Phonegap.."+textoURl, function () { showAlert('Message sent successfully');}, function (e) { showAlert('Message Failed:' + e);});
	 }
	  
  }
}
   
