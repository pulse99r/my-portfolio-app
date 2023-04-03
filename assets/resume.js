const createNewElement = (element, attrib, val,innerText) => {
  let newElement = document.createElement(element)
  newElement.setAttribute(attrib,val);
  newElement.innerText = innerText;
  return newElement;
 }

let menuBar = document.querySelector('ul.nav-ul');
console.log(menuBar)
const navLinks = ['<-Back','OBJECTIVE','EMPLOYMENT HISTORY','EDUCATION','SKILLS','VOLUNTEER','HOBBIES']
// let menuItem = document.createElement('li');
for (let i = 0; i < navLinks.length; i++) {
  let navLink = navLinks[i].toLowerCase();

  // navLink = navLink ==="employment history" ? 'employment-history': navLink;
  let menuItem = createNewElement('li','class', `nav-item ${navLink}`,`${navLinks[i]}`);
  console.log(menuItem)
  menuBar.append(menuItem);
}
const completedMenu = document.querySelectorAll('.nav-item')
  completedMenu.forEach(navButton => {
    navButton.addEventListener('click',(event) => {
      console.log(event.target.textContent,' completedMenu button clicked!')
      manageDetailDisplay(navButton)
  })
});


const manageDetailDisplay = (section) => {
  let detailSections = document.querySelectorAll('details')
  detailSections.forEach(sectionElement => {
    if(sectionElement.getAttribute('class').includes('active')){
      sectionElement.classList.remove('active');
      sectionElement.classList.add('hidden');
    }
    if(sectionElement.getAttribute('class').includes(section)){
      sectionElement.classList.add('active')
    }   
  });
console.log('section to be shown: ', section.innerText.toLowerCase())
  
  console.log('All sections except Objective have been hidden')
}