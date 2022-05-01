var currentpage = 1
const inanim =  "animate__rotateInDownLeft"
const outanim =  "animate__rotateOutDownLeft"
const inanimback =  "animate__rotateInUpLeft"
const outanimback =  "animate__rotateOutUpLeft"

function pagedown() {
    firstpage = document.getElementById("greeter-page-" + currentpage);
    secondpage = document.getElementById("greeter-page-" + (currentpage + 1))
    firstpage.classList.add(outanimback)
    firstpage.addEventListener('animationend', () => {
        firstpage.classList.remove("disp")
        firstpage.classList.add("nodisp")
        firstpage.classList.remove(outanimback)
    });
    secondpage.classList.add("disp")
    secondpage.classList.remove("nodisp")
    secondpage.classList.add(inanimback)
    secondpage.addEventListener('animationend', () => {
        secondpage.classList.remove(inanimback);
    });
    currentpage = currentpage + 1

}

function pageup() {
    firstpage = document.getElementById("greeter-page-" + currentpage);
    secondpage = document.getElementById("greeter-page-" + (currentpage - 1))
    firstpage.classList.add(outanim)
    firstpage.addEventListener('animationend', () => {
        firstpage.classList.remove("disp")
        firstpage.classList.add("nodisp")
        firstpage.classList.remove(outanim)
    });
    secondpage.classList.add("disp")
    secondpage.classList.remove("nodisp")
    secondpage.classList.add(inanim)
    secondpage.addEventListener('animationend', () => {
        secondpage.classList.remove(inanim);
    });
    currentpage = currentpage - 1
}