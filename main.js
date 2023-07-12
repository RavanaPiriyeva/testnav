let nav = document.getElementById('nav');
let nav2 = document.getElementById('nav2');

let li = document.querySelectorAll('li');
let navbox = document.querySelector(".navbox")
li[1].onclick = () => {
    console.log(li[1].offsetWidth)
};
nav.onmouseover = () => {
    setTimeout(() => nav.classList.add('open'));
};
nav.onmouseleave = () => nav.classList.remove('open');

nav2.onmouseover = () => {
    setTimeout(() => nav2.classList.add('open'));
};
nav2.onmouseleave = () => nav2.classList.remove('open');

Array.from(
    nav.children[0].children
).forEach((li, i) => {
    li.onmouseover = () => {
      //  console.log(navbox)
        nav.setAttribute('data-hover', i)
       // navbox.style.left="50px"
    };
});
Array.from(
    nav2.children[0].children
).forEach((li, i) => {
    li.onmouseover = () => {
      //  console.log(navbox)
        nav2.setAttribute('data-hover', i)
       // navbox.style.left="50px"
    };
});