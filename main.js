const nav = document.getElementById('nav');
const nav2 = document.getElementById('nav2');
const navbar2li = document.querySelectorAll('.navbar2 li');
const navbar2 = document.querySelector('.navbar2');
const navbox2 = document.querySelector('.navbox2');
const li = document.querySelectorAll('li');
const navbox = document.querySelector(".navbox");
nav.querySelectorAll('li').forEach(element=>{
    element.addEventListener('mouseover',()=>{
        //console.log('sss')
        let color = element.getAttribute("data-color");
        console.log('sss')

        navbox.style.setProperty("--after-background-color", color);
    })
    

})
//console.log(navbar2li   )


li[1].addEventListener('click', () => {
    console.log(li[1].offsetWidth);
});

nav.addEventListener('mouseover', () => {
    setTimeout(() => {
        nav.classList.add('open');
    });
});

nav.addEventListener('mouseleave', () => {
    nav.classList.remove('open');
});

nav2.addEventListener('mouseover', () => {
    setTimeout(() => {
        nav2.classList.add('open');
    });
});

nav2.addEventListener('mouseleave', () => {
    nav2.classList.remove('open');
});

for (const liElement of nav.children[0].children) {
    liElement.addEventListener('mouseover', () => {
        nav.setAttribute('data-hover', Array.from(nav.children[0].children).indexOf(liElement));
        // navbox.style.left="50px";
        navbar2.style.setProperty("--after-top", `10px`);
        navbox2.querySelectorAll("ul")[0].style.opacity = "1"


    });
}

for (const liElement of nav2.children[0].children) {
    liElement.addEventListener('mouseover', () => {
        nav2.setAttribute('data-hover', Array.from(nav2.children[0].children).indexOf(liElement));
        // navbox.style.left="50px";
    });
}
for (const liElement of navbar2li) {
    let maxwidth = 0
    navbox2.querySelectorAll("ul").forEach(x => {
        if (x.offsetHeight > maxwidth){
            maxwidth=x.offsetHeight
        }
    })
    navbox2.style.height=`${maxwidth}px`
    liElement.addEventListener('mouseover', () => {
        navbar2.style.setProperty("--after-top", `${liElement.offsetTop}px`);
        position = -maxwidth
        var value = nav2.getAttribute("data-hover");

        navbox2.style.transform = `translateY(${position * value}px)`
        navbox2.querySelectorAll("ul")[value].style.opacity = "1"
        // navbox.style.left="50px";
        //   console.log("sss")
    });
    liElement.addEventListener('mouseleave', () => {

        var value = nav2.getAttribute("data-hover");
        navbox2.querySelectorAll("ul")[value].style.opacity = "1"
        navbox2.querySelectorAll("ul")[value].style.height = `${maxwidth}px`

        // navbox.style.left="50px";
        //   console.log("sss")
    });
}
