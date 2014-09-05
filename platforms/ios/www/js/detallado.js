window.onload = function()
{
	Parse.initialize("7KH8tVToGK0SQXPTeolmBuNg4qRq64wZM4Pz90e4", "XBkYGi16J0jQfejKrewI7QBqchv8LpgLW4AexTjr");
    
  var recibiendoVariable = location.search.substr( location.search.indexOf("=") + 1 );

  var catalogo = Parse.Object.extend("catalogo");
  var query = new Parse.Query(catalogo);

  query.equalTo("objectId",recibiendoVariable);
  query.find({
    success: function(results) {
      //alert("Successfully retrieved " + results.length + " scores.");
      // Do something with the returned Parse.Object values

      var element = "";
      imageURLs = [];  
      for (var i = 0; i < results.length; i++) 
      { 
        var object = results[i];

        element = element + "<form method= get action= detallado.html>  <input name=boton1 type=image + src="+object.get('Imagen').url() +"></form>";

        //element = element + "<img src= " + object.get('Imagen').url() +">";
        element = element + "<h2>" + object.get('Titulo')+"</h2>"; 

        element = element + "<div class='alert alert-success' role='alert'>"+ object.get('Descripcion') +"</div>";

        //element = element + "<p>" + object.get('Descripcion')+"</p>";

        element = element + "<h5> Etiquetas: </h5>";

      $("#resultado").html(element);

        var relation = object.relation('Etiquetas');

        relation.query().find( 
        {
          success: function(toppings) 
          {

              var element = document.getElementById('resultado').innerHTML;
              //element = element + "<p>";
              for(var j = 0; j < toppings.length; j++) 
              {
                //element = element + toppings[j].get('Nombre') +"   ";
                element = element + "<span class='label label-primary'>"+toppings[j].get('Nombre')+"</span>"+"  ";
              }
              //element = element + "</p>"
              $("#resultado").html(element);
          }
        }) 
      }

    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

}


/*
window.onload = function()
{
  alert("No se que pasa");
  var recibiendoVariable = location.search.substr( location.search.indexOf("=") + 1 );
  var element= "<p>"+recibiendoVariable+"</p>";
  $("#resultado").html(element);
}
*/