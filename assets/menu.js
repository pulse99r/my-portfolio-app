let menuItems = ["Home", "About","Portfolio","Resume","Contact"];

const createMenu = (menuItems) => {
  //const headArea = document.querySelector('.page-header') // 1

  const container = document.querySelector('.container');
  const headerContainer = document.createElement('div')
  headerContainer.setAttribute('class', 'header-container')
  const pgHeader = document.createElement('h1')
  pgHeader.classList.add('page-header')
  pgHeader.innerText = "Movie Poster"
  
  const menuBar = document.createElement('ul');
  menuBar.setAttribute("class", 'menuItems no-list-items');
  for (const menuItem of menuItems) {
    let newMenuItem = document.createElement('li');
    if(menuItem === 'Resume'){
      newMenuItem = document.createElement('a');
      newMenuItem.setAttribute("href","assets/my-resume.html")
      //assets/my-resume.html
      newMenuItem.innerHTML = 'Resume';
    }
    newMenuItem.setAttribute("class", `menuItem no-list-items ${menuItem}`);
    newMenuItem.innerText = menuItem;
    menuBar.append(newMenuItem);
    headerContainer.append(pgHeader);
    headerContainer.append(menuBar);
    container.append(headerContainer)
    
  }
}
createMenu(menuItems)
