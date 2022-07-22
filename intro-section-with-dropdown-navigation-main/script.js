let menu = document.querySelector('.menu');
let icon = document.querySelector('.menu svg');
let nav = document.querySelector('header nav');
let dropDown = document.querySelectorAll('.feature');
let menuIcons = [
     '<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>',
     '<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>'
];
let setMenuIcon = true
menu.addEventListener('click', () => {
     if (setMenuIcon) {
          menu.innerHTML = menuIcons[1];
          setMenuIcon = false;
          nav.style.display = 'flex';
     }
     else {
          menu.innerHTML = menuIcons[0];
          setMenuIcon = true;
          nav.style.display = 'none';

     }
     console.log(true);
})
