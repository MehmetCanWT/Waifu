function get_random_anime_sfw(){

    url = "https://api.waifu.pics/sfw/waifu";
  
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      display_image(data.url);
      console.log(data);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  
  }
  
  function display_image(image_url){
    document.getElementById("image").src = image_url;
  }
  
  
  
  