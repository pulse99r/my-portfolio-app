// alert('Script loaded!')
/* 
1. user enters an movie name
2. movie poster and deets are displayed on the page
3. 

*/
const APIkey = '3a97947f';

let cards = document.querySelectorAll('.card>p')
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.setAttribute('class','card-link');
}

let container = document.querySelector('.container')

const pageElements = ['input','movie-results']

const createPageElements = () => {
  
  pageElements.forEach(pageElement => {
    let newDivElement = document.createElement('div')
    if(pageElement === 'input'){
      let inputElement = createInputField();
      newDivElement.append(inputElement)
      let newButton = createNewButton()
      newDivElement.append(newButton)
    } else {
      newDivElement.classList = pageElement
    }
    container.append(newDivElement)
  });
}

const createInputField = () => {
  let inputElement = document.createElement('input')
  inputElement.type="text"
  inputElement.id = 'get-movie'
  inputElement.placeholder = 'Enter a movie title'
  return inputElement;
}

const createNewButton = () => {
  let newButton = document.createElement('BUTTON')
  newButton.type = 'Submit'
  newButton.innerText = "Get Movie";
  newButton.id = 'button-click'
  return newButton;
}
const createNewPageElement = (pageElement) => {
  let newElement = document.createElement(pageElement);
  
  newElement.id = pageElement;
  newElement.classList = pageElement;
  return newElement;
}
createPageElements(pageElements)

let getMovieClick = document.querySelector('#button-click')
const movieInfo = getMovieClick.addEventListener('click', (event)=>{
  event.preventDefault;
  let movieTitle = document.querySelector('#get-movie').value;
  console.log('Click Event Happened!', "Title: ", movieTitle)
    fetch(`http://www.omdbapi.com/?t=${movieTitle}&plot=full&apikey=${APIkey}`)
      .then(response => response.json())
      .then(response => displayMovieDetails(response))
      .catch(err => console.error(err));
      console.log('movieTitle: ==> ',movieTitle)
})

const createNewElement = (element, attrib, val) => {
 let newElement = document.createElement(element)
 newElement.setAttribute(attrib,val);
 return newElement;
}

const displayMovieDetails = (movie) => {
  console.log(movie)
  let movieResultsDiv = document.querySelector('.movie-results')

  //let myMovieObj = (Title,Released,Runtime,Genre,Actors,Plot,Awards,Poster,imdbID) = movie; 
  let moviePosterCard = createNewElement('ul', 'class', 'movie-poster-card')
  let posterLiElement = createNewElement('li','class','list-item poster-container');
  let posterImgElement = createNewElement('img','src',movie.Poster );
  posterLiElement.append(posterImgElement)
  moviePosterCard.append(posterLiElement);
  
  let titleLi = createNewElement('li','class', 'list-item title')
  titleLi.innerText = movie.Title;
  moviePosterCard.append(titleLi);
  
  let actorsLi = createNewElement('li','class', 'list-item actors')
  actorsLi.innerText = movie.Actors;
  moviePosterCard.append(actorsLi);
  
  let releaseLi = createNewElement('li', 'class', 'list-item release');
  releaseLi.innerHTML = `<strong>Released:</strong> ${movie.Released}`;
  
  let genreLi = createNewElement('li', 'class', 'list-item genre');
  genreLi.innerHTML = `<strong>Genre:</strong> ${movie.Genre}`;
  
  let genreReleasedRuntimeLi = createNewElement('li', 'class', 'list-item runtime');
  genreReleasedRuntimeLi.innerHTML = `<strong>Genre:</strong> ${movie.Genre} • <strong>Released:</strong> ${movie.Released} • <strong>Runtime:</strong> ${movie.Runtime}`;
  moviePosterCard.append(genreReleasedRuntimeLi);
  
  let plotLi = createNewElement('li', 'class', 'list-item plot');
  plotLi.innerHTML = `<strong>Plot:</strong> ${movie.Plot}`;
  moviePosterCard.append(plotLi);
  
  let awardsLi = createNewElement('li', 'class', 'list-item awards');
  awardsLi.innerHTML= `<strong>Awards:</strong> ${movie.Awards}`;
  moviePosterCard.append(awardsLi);
  
  let imdbIdLi = createNewElement('li', 'class', 'list-item imdb');
  imdbIdLi.innerHTML = `<strong>imdbId:</strong> ${movie.imdbID}`;
  moviePosterCard.append(imdbIdLi);

  movieResultsDiv.append(moviePosterCard)
  
 
  // newDivElement.append(newElement);
  // let newImgTag = createNewPageElement('img')
  // newDivElement.append(newImgTag);
  // let newUlTag = createNewPageElement('ul')
  // newDivElement.append(newUlTag);
  // movieResultsDiv.append(newImgElement)
}