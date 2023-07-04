fetch('https://api.nekosapi.com/v2/images/random')
  .then(res => res.json())
  .then((res) => {
    console.log(res.data.attributes.file)
  })