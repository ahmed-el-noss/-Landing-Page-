/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const myPage = document.querySelector('html');
const myBody = document.querySelector('body');
myPage.setAttribute('style', 'scroll-behavior:smooth; flex-direction:column; box-sizing:border-box;');
const myMenu = document.querySelector('.page__header');
myMenu.setAttribute('style', 'transition:ease 0.5s all;');
const myUl1 = document.querySelector('#navbar__list');
const myMain1 = document.querySelector('main');
const myNewSection = document.createElement('section');
myMain1.appendChild(myNewSection);
const myAllSection = document.querySelectorAll('section');
const myButton1 = document.createElement('button');
myButton1.innerHTML = 'top';
myButton1.setAttribute('style', 'display:none; position:fixed; bottom:20px; right:30px; font-size:20px; border:none; background-color:#cc1; color:white; cursor:pointer; padding:15px; border-radius:10px;');
myBody.appendChild(myButton1);
let i;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**
 * End Main Functions
 * Begin Events
 * 
*/

// build the nav
// Build menu 
// Scroll to section on link click
for (i = 1; i <= myAllSection.length; i++) {
    let myLi1 = document.createElement('li');
    let myLinks1 = document.createElement('a');
    myLinks1.setAttribute('class', 'menu__link');
    myLinks1.setAttribute('href', `#section${i}`);
    myLinks1.innerHTML = `section ${i}`;
    myLi1.appendChild(myLinks1);
    myUl1.appendChild(myLi1);
};
// When adding a section for page, a link is automatically added to it in the menu
for (let i = 1; i <= myAllSection.length; i++) {

    myNewSection.setAttribute('id', `section${i}`);
    myNewSection.innerHTML = `<div class="landing__container">
    <h2>Section ${i}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>`;
};
// hide menu when user don`t scroll
let myScrollUp = window.scrollY;
document.addEventListener('scroll', function () {
    let myScrollDown = window.scrollY;
    if (myScrollUp > myScrollDown) {
        myMenu.style.top = '0';
    } else {
        setTimeout(function () { myMenu.style.top = '-50px'; }, 6000);
    }
    myScrollUp = myScrollDown
});
// Add class 'active' to section when near top of viewport
// Set sections as active
for (let x = 0; x < myAllSection.length; x++) {
    myAllSection[x].removeAttribute('style', 'min-height: 80vh;');
    myAllSection[0].className = '';
    myAllSection[x].addEventListener('mouseover', function () {
        this.classList.toggle('active');
    });
};
// folding sections when  click on (h2)  
const myAllH2 = document.querySelectorAll("h2");
for (let x = 0; x < myAllH2.length; x++) {
    myAllH2[x].setAttribute('style', 'cursor: pointer;')
    myAllH2[x].addEventListener('click', function () {
        this.classList.toggle('active1');
        let myBoxs = this.nextElementSibling;
        if (myBoxs.style.display === "block") {
            myBoxs.style.display = 'none';
            myBoxs.nextElementSibling.style.display = 'none';
        } else {
            myBoxs.style.display = 'block';
            myBoxs.nextElementSibling.style.display = 'block';
        }
    });
};
// button (top)
document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myButton1.style.display = 'block';
    } else {
        myButton1.style.display = 'none';
    }
});
myButton1.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

















