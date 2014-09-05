

$(document).ready(function(){
    Parse.initialize("7KH8tVToGK0SQXPTeolmBuNg4qRq64wZM4Pz90e4", "XBkYGi16J0jQfejKrewI7QBqchv8LpgLW4AexTjr");
    
  var catalogo = Parse.Object.extend("catalogo");
  var query = new Parse.Query(catalogo);

  query.select("Titulo", "Descripcion","Imagen");
  query.find({
    success: function(results) {
      //alert("Successfully retrieved " + results.length + " scores.");
      // Do something with the returned Parse.Object values

      
      element = "<div class='row'>";
      imageURLs = [];  
      for (var i = 0; i < results.length; i++) { 
        var object = results[i];
        element = element + "<div class='col-sm-3'> <div class='thumbnail'>";
        element = element + "<a> <img src="+ object.get('Imagen').url() +" alt= 'First slid'> </a>";
        //element = element + "<img src= " + object.get('Imagen').url() +">";
        //element = element + "<a href= detallado.html?variable="+ object.id + ">" + object.get('Titulo')+"</a>"; 
        element = element + " <div class='caption'> <h3> "+ object.get('Titulo')+" </h3>";
        element = element + " <p> <a href= detallado.html?variable="+ object.id + " class='btn btn-primary' role='button'> Ver más </a> </p> ";
      

        //element = element + "<a>" + object.get('Titulo')+"</a>"; 
        //element = element + "<p>" + object.get('Descripcion')+"</p>";
        element = element + "</div> </div> </div>";
      }
      //element = element + "</div> </div>";
      $("#minifigures").html(element);
      element = element + "</div>"
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

});
