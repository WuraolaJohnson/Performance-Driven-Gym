const toggle = document.querySelector("#togglebtn");

console.log(toggle);

const navLinks = document.querySelector(".links");


navLinks.classList.remove("collapse");
navLinks.classList.remove("exit");


const navButtonA = document.querySelector(".links .buttonA");

console.log(navButtonA);


toggle.addEventListener("click", function (e) {

    const addPng = "assets/image/add.png";

    if (e.target.src.endsWith(addPng)) {
        e.target.src = "assets/image/remove.png";

        navButtonA.innerHTML = "reserve your classes";

        navLinks.classList.add("collapse");
        navLinks.classList.remove("exit");


    }

    else {
        navLinks.classList.add("exit");
        navLinks.classList.remove("collapse");
        navLinks.classList.remove("links");


        e.target.src = addPng;



    }
})





// Update whenever window resizes
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(`Width: ${width}, Height: ${height}`);
    if (width > 798) {
        navLinks.classList.add("links");
        navLinks.classList.remove("collapse");
        navLinks.classList.remove("exit");

        console.log("done");
    }

    else if (width <= 798) {
        navLinks.classList.add("exit");
        navLinks.classList.remove("links");

        console.log("reduced");
    }
});
