let menuBar = document.querySelectorAll('ul.nav-ul');
const navLinks = ['<-Back','OBJECTIVE','EMPLOYMENT HISTORY','EDUCATION','SKILLS','VOLUNTEER','HOBBIES', "Home"]
let menuItem = document.createElement('li');
for (let i = 0; i < navLinks.length; i++) {
  let navLink = navLinks[i].toLowerCase();
  navLink = navLink ==="employment history" ? 'employment-history': navLink;
  console.log(navLink)
  menuItem.setAttribute('class','nav-item');
  menuItem.classList.add(navLink)
  menuItem.innerText = navLink;
  // menuBar.append(menuItem);
}
