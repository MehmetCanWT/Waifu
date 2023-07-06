function get_waifu(){

  url = "https://api.waifu.pics/nsfw/waifu";

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




function get_neko(){

  url = "https://api.waifu.pics/nsfw/neko";

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



