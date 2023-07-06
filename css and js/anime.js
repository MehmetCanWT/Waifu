fetch('https://api.consumet.org/anime/gogoanime/info/spy-x-family')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

    function get_anime(){

        url = "https://api.consumet.org/anime/gogoanime/info/spy-x-family";
      
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          display_image(data.id);
          console.log(data);
        })
        .catch(function(error){
          console.log("Error: " + error);
        });
      
      
      }
      
      function display_image(image_url){
        document.getElementById("textbox").value = image_url;
      }
      
      
      
      