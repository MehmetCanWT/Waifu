function get_random_dog_image(){

    url = "https://api.nekosapi.com/v2/images/random";
  
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      display_image(data.data.attributes.file);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  
  }
  
  function display_image(image_url){
    document.getElementById("image").src = image_url;
  }
  