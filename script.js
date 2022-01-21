//writing to dody through javascrpt
//setting the title of the page
//adding the logo image in the header
document.body.innerHTML = `<div class="heading-container">
<h1>List of Game of Throne Characters and their Quotes</h1>
<img src="logo.png" alt="game of thrones" width="50px" height="50px">
</div>
<div id="mainContainer" class="main-container"></div>`;
//function to get the data and fetch the data from the given api
const getData = async () => {
    try {
      const data = await fetch("https://game-of-thrones-quotes.herokuapp.com/v1/characters");
      const characters = await data.json();
      console.log(characters)
      mainContainer.innerHTML = "";
      characters.forEach((character) => {
        displayData(character);     //passing the data to the function
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  getData();
  //function to display the data using template literal
  const displayData = (obj) => {
    mainContainer.innerHTML += `
    <div class="container">
    <h3>Character Name:${obj.name}</h3>
    <p><b>House:</b> ${obj.house.name}</p>
    <p><b>Quotes:</b> ${obj.quotes[0]}</p>
    <p><b>Slug:</b> ${obj.slug}</p>
    <p>
    </div>
    `;
  };