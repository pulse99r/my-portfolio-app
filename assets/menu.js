let menuItems = ["Home", "About","Portfolio","Resume","Contact"];
const docBody = document.querySelector('body')
const createMenu = (menuItems) => {
  const menuBar = document.createElement('ul');
  const pgHeader = document.createElement('h1')
  pgHeader.innerText = "Oh, Yeah...Portfolio!"
  menuBar.setAttribute("class", 'menu no-list-items');
  for (const menuItem of menuItems) {
    let newMenuItem = document.createElement('li');
    newMenuItem.setAttribute("class", 'menuItems no-list-items');
    newMenuItem.innerText = menuItem;
    menuBar.append(newMenuItem)
  }
  docBody.append(pgHeader);
  docBody.append(menuBar)
}
console.log(createMenu(menuItems))
