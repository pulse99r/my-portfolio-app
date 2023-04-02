let menuItems = ["Home", "About","Portfolio","Resume","Contact"];

const createMenu = (menuItems) => {
  const headArea = document.querySelector('.head-area') // 1

  const headerContainer = document.createElement('div')
  headerContainer.setAttribute('class', 'header-container')
  const pgHeader = document.createElement('h1')
  pgHeader.innerText = "Oh, Yeah ... Portfolio!"
  
  const menuBar = document.createElement('ul');
  menuBar.setAttribute("class", 'menu no-list-items');
  for (const menuItem of menuItems) {
    let newMenuItem = document.createElement('li');
    if(menuItem === 'Resume'){
      newMenuItem = document.createElement('a');
      newMenuItem.setAttribute("href","./my-resume.html")
      //assets/my-resume.html
      newMenuItem.innerHTML = 'Resume';
    }
    newMenuItem.setAttribute("class", `menuItems no-list-items ${menuItem}`);
    newMenuItem.innerText = menuItem;
    menuBar.append(newMenuItem);
    headerContainer.append(pgHeader);
    headerContainer.append(menuBar);
    headArea.append(headerContainer)
    
  }
}
createMenu(menuItems)
