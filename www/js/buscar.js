  function buscar(){
  Parse.initialize("7KH8tVToGK0SQXPTeolmBuNg4qRq64wZM4Pz90e4", "XBkYGi16J0jQfejKrewI7QBqchv8LpgLW4AexTjr");

  var titulo = document.getElementById("Titulo").value;

  var catalogo = Parse.Object.extend("catalogo");
  var query = new Parse.Query(catalogo);
  
  var resultado = document.getElementById("resultado");

  var pizza;

  query.find(
  {
    success: function(results) 
    {
      var element=" ";
      $("#resultado").html(element);
      var element =  "<h1> Resultados de la búsqueda </h1>";
      for(var i = 0; i < results.length; i++) 
      {
        pizza = results[i];
        aux(pizza,resultado,titulo);
        //$("#resultado").html(element);
      }
      
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

function aux(pizza,resultado,titulo){
        //alert(pizza.get("Titulo"));
        var relation = pizza.relation('Etiquetas');

        //relation.query().equalTo("Nombre","tercero");
        relation.query().find( 
        {
          success: function(toppings) 
          {
            //alert(pizza.get("Titulo")+"Hola");
            // toppings is a list of toppings for this pizza
            
            var div1 = document.createElement("div");
            div1.setAttribute("class", "row"); 
            resultado.appendChild(div1);




            for(var j = 0; j < toppings.length; j++) 
            {
              if( toppings[j].get("Nombre")==titulo)
              {
                //alert(pizza.get("Titulo"));

                var div2 = document.createElement("div");
                div2.setAttribute("class", "col-sm-3"); 
                div1.appendChild(div2);

                var div3 = document.createElement("div");
                div3.setAttribute("class", "thumbnail"); 
                div2.appendChild(div3);

                var a = document.createElement("a");
                div3.appendChild(a);

                var p = document.createElement("img");
                p.setAttribute("src", pizza.get('Imagen').url()); 
                p.setAttribute("alt", "First slid"); 
                a.appendChild(p);

                var div4 = document.createElement("div");
                div4.setAttribute("class", "caption"); 
                div3.appendChild(div4);

                var h3 = document.createElement("h3");
                h3.innerHTML = pizza.get('Titulo')+" "; 
                div4.appendChild(h3);

                var p1 = document.createElement("p");
                div4.appendChild(p1);

                var p2 = document.createElement("a");
                p2.setAttribute("href","detallado.html?variable="+ pizza.id);
                p2.innerHTML = "Ver más"; 
                p2.setAttribute("class","btn btn-primary");
                p2.setAttribute("role","button");
                p1.appendChild(p2);


                //return element;
              }
              
            }
            
          }
        });

}



