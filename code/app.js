const formHero = document.getElementById("form-hero");
const inputHero = document.getElementById("text-write");
 
const formUpdate = document.getElementById("name-email");
const inputNameUpdate = document.getElementById("name");
const inputEmailUpdate = document.getElementById("email");

const arrowLeft = document.getElementById("icon-left");
const arrowRight = document.getElementById("icon-right");

const titleHealth = document.getElementById("title-health");
const subtitleHealth = document.getElementById("subtitle-health");
const pageCounter = document.getElementById("page-counter");

const listCardsAdvantages = document.querySelectorAll(".card");

const list = [
        {
    title:"Track Your Health History Periodically",
    subtitle:"A more fluid communication reduces the risk of errors and enhances your protection from a forensic point of view."
        },

        {
    title:"Understand Your Health Better",
    subtitle:"Regular health monitoring helps you identify changes early and make more informed decisions about your well-being."
        },

        {
    title:"Connect With Your Healthcare Team",
    subtitle:"Clear communication between patients and professionals improves care coordination and helps ensure more effective treatments."
        },

        {
    title:"Access Your Health Information Easily",
    subtitle:"Organized medical records make it easier to track past treatments, review test results, and support better healthcare decisions."
        }
]

let indice = 0;

formHero.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = inputHero.value.trim()

    if (!email.includes("@")) {
        alert("CADE O @ NO EMAIL SEU LOUCO");
        return
    }

    alert(`EMAIL CADASTRADO: ${email}`)

    formHero.reset();
})

formUpdate.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const nome = inputNameUpdate.value.trim();
    const email = inputEmailUpdate.value.trim();

    alert(`NAME:${nome}
EMAIL:${email}`);
formUpdate.reset()
})

arrowLeft.addEventListener("click", () => {
    if (indice === 0) {
        indice = 3
    } else {
        indice--
    }

    titleHealth.textContent = list[indice].title;
    subtitleHealth.textContent = list[indice].subtitle;
    pageCounter.textContent = `${indice + 1}/4 screen`;
})


arrowRight.addEventListener("click", () => {
    if (indice === 3){
        indice = 0
    } else {
        indice++
    }

    titleHealth.textContent = list[indice].title;
    subtitleHealth.textContent = list[indice].subtitle;
    pageCounter.textContent = `${indice + 1}/4 screen`;
})

listCardsAdvantages.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("lg:bg-[#676767]");
    
    })
})


