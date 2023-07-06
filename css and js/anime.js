
    function get_anime(){

        url = "https://api.consumet.org/anime/gogoanime/info/spy-x-family";
      
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          anime_name(data.title);
          desc(data.description);
          display_image(data.image);
          releasedate(data.releaseDate);
          statuss(data.status);
          console.log(data);
        })
        .catch(function(error){
          console.log("Error: " + error);
        });
      
      
      }
      //Anime Name
      function anime_name(names){
        document.getElementById("name").innerHTML = names;
      }
      //Anime Description
      function desc(description){
        document.getElementById("desc").innerHTML = description;
      }
      //Anime Image
      function display_image(image_url){
        document.getElementById("animeimg").src = image_url;
      }
      //Release Date
      function releasedate(release){
        document.getElementById("release").innerHTML = release;
      }
      //Status
      function statuss(status){
        document.getElementById("status").innerHTML = status;
      }
      
      
      
      