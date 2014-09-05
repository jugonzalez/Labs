  function guardar(){
    Parse.initialize("7KH8tVToGK0SQXPTeolmBuNg4qRq64wZM4Pz90e4", "XBkYGi16J0jQfejKrewI7QBqchv8LpgLW4AexTjr");

    var catalogo = Parse.Object.extend("catalogo");
    var query = new catalogo();

    var titulo = document.getElementById("Titulo").value;
    var descripcion = document.getElementById("Descripción").value;




    //ParseRelation<ParseObject> relation = Parse.Relation("catalogo","Etiquetas");
    //relation.add(t);
//--------------------------------------------------

      var fileUploadControl = $("#fileselect")[0];
      if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var name = "photoimage.jpg";

        var parseFile = new Parse.File(name, file);

        //put this inside if {
        parseFile.save().then(function() {
          //alert("exito");
        // The file has been saved to Parse.
      }, function(error) {
      // The file either could not be read, or could not be saved to Parse.
      });
      }

      // Be sure of ur parameters name
      // prod is extend of my class in parse from this: var prod = new products();
      query.set("Imagen", parseFile);
      query.set("Titulo", titulo);
      query.set("Descripcion", descripcion);
      query.save();

    var tags = document.getElementById("Etiquetas").value;
    var tag = tags.split(" ");

      
      for (var i = 0; i < tag.length; i++) { 
        var etiqueta = Parse.Object.extend("Etiqueta");
        var etiquetas = new etiqueta();
        var t = tag[i];
        etiquetas.set("Nombre",t);

        etiquetas.save(null, {
        success: function(etiquetas) {
            // The object was saved successfully.
          var relation = query.relation("Etiquetas");
          relation.add(etiquetas);
          query.save();
        },
        error: function(etiquetas, error) {
          // The save failed.
          // error is a Parse.Error with an error code and description.
        }
      });

      }

      alert("Registro Agregado");
      
    }
  