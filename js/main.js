// kuriame objektu (klausimu) lista

const questions = [{
        question: "Įvyko nelaimingas atsitikimas, yra nukentėjusiųjų. Koks Jūsų pats pirmas veiksmas?",
        options: ["Pradedate daryti pirminį gaivinimą",
            "Bandote kalbėti su nukentėjusiuoju",
            "Apsidarote, įvertinate aplinką ir galimus pavojus",
            "Bėgate ieškoti išorinio automationio defibriliatoriaus"
        ],
        answer: 2,
        additionalInfo: "Prieš teikdami pirmąją pagalbą, įvertinkite situaciją ir įsitikinkite, kad tai yra saugu (jei situacija yra pavojinga Jūsų gyvybei ar sveikatai, pavyzdžiui: pravažiuojantis transportas, griūvantys, krentantys objektai, gaisras, elektra, kenksmingos medžiagos, nukentėjusysis yra agresyvus, galite užsikrėsti infekcine liga – šiais atvejais pirmiausia reikia užtikrinti saugumą)."
    }, {
        question: "Įvertinus, kad aplinka saugi, einate prie nukentėjusiojo. Jis yra sąmoningas, atsakinėja į klausimus aiškiai ir rišliai. Ką darote toliau?",
        options: ["Pradedate daryti pirminį gaivinimą",
            "Nukentėjusįjį nuraminate, apžiūrite ir jei reikia, suteikiate pirmąją pagalbą, kviečiate GMP",
            "Staigiai transportuojate nukentėjusįjį į kitą vietą, net jei aplinka saugi",
            "Defibriliuojate"
        ],
        answer: 1,
        additionalInfo: "Nuraminkite jį; Stenkitės nejudinti, nebent aplinkoje tvyro pavojus nukentėjusiajam ar teikiančiam pagalbą; Apžiūrėkite nukentėjusįjį: pačiupinėkite jį nuo galvos iki kojų; Suteikite pirmąją pagalbą; Jeigu būtina, kvieskite greitąją medicinos pagalbą"
    }, {
        question: "Įvertinus, kad aplinka saugi, einate prie nukentėjusiojo. Jis neatsako į jūsų užduodamus klausimus, yra nesąmoningas. Ką darote?",
        options: ["Pradedate gaivinimą, paprašote šalia esančio žmogaus (praeivio), kad kviestų GMP ir atneštų automatinį išorinį defibriliatorių (AID)",
            "Pradedate gaivinimą, tuo metu pats kviečiate greitąją medicinos pagalbą, net jei aplinkui daug žmonių, kurie tai galėtų padaryti",
            "Staigiai transportuojate nukentėjusįjį į kitą vietą, net jei aplinka saugi",
            "Bandote prakalbinti nukentėjusįjį"
        ],
        answer: 0,
        additionalInfo: "Kvieskite greitąją medicinos pagalbą, paprašykite pristatyti išorinį automatinį defibriliatorių; Pradėkite gaivinimą."
    }, {
        question: "Bendrosios pagalbos numeris 112:",
        options: ["Naudojamas tik Lietuvoje",
            "Naudojamas visoje Europoje"
        ],
        answer: 1
    }, {
        question: "Paskambinus bendrosios pagalbos numeriu 112 negalima padėti ragelio, kol neleis operatorius.",
        options: ["Tiesa",
            "Netiesa"
        ],
        answer: 0,
        additionalInfo: "Nepadėkite ragelio, kol neleis operatorius – pokalbį turi baigti pagalbos tarnybos dispečeris. Kvalifikuoti specialistai skirtingose šalyse pasiruošę telefonu instruktuoti, kaip suteikti pirmąją pagalbą."
    }, {
        question: "Teisingas pradinio gaivinimo algoritmas:",
        options: ["Kraujotakos užtikrinimas (Circulation), kvėpavimo užtikrinimas (Breathing), kvėpavimo takų atvėrimas (Airway)",
            "Kvėpavimo takų atvėrimas (Airway), kraujotakos užtikrinimas (Circulation), kvėpavimo užtikrinimas (Breathing)",
            "Kvėpavimo takų atvėrimas (Airway), kvėpavimo užtikrinimas (Breathing), kraujotakos užtikrinimas (Circulation)"
        ],
        answer: 2
    }, {
        question: "Paspaudimus ir įpūtimus reikia kartoti santykiu 30:2:",
        options: ["Tiesa",
            "Netiesa"
        ],
        answer: 0
    }, {
        question: "Krūtinė spaudžiama visa rankų jėga, paspaudimų gylis turi būti iki 3cm:",
        options: ["Tiesa",
            "Netiesa"
        ],
        answer: 1
    }
    //, {
    // 	question:"",
    // 	options:["","","",""],
    // 	answer:2
    // }, {
    // 	question:"",
    // 	options:["","","",""],
    // 	answer:2
    // }, {
    // 	question:"",
    // 	options:["","","",""],
    // 	answer:2
    // },


];
const startQ = document.querySelector(".startPage");
const quiz = document.querySelector(".quiz");
const question = document.querySelector(".question h4");
const option = document.querySelector(".options");
const more = document.querySelector(".more");
const results = document.querySelector(".results");
const correctAnswers = document.querySelector(".correctAnswers");

let countQ = 0;
let currentQ;
let possibleQ = [];
let possibleOpt = [];

// sukeliame visus galimus klausimaus i lista - possibleQ
function setPossibleQ() {
    const total = questions.length;
    for (let i = 0; i < total; i++) {
        possibleQ.push(questions[i]);
    }
}

// gauname klausima 
function getNewQ() {
    const qNumber = possibleQ[0];
    currentQ = qNumber;
    question.innerHTML = currentQ.question;
    console.log(qNumber);
    // gauname pozicija klausimo is possibleQ listo
    const index = possibleQ.indexOf(qNumber);
    // kad nesikartotu klausimai, tai istriname qNumber is possibleQ
    possibleQ.splice(index, 1);
    //gauname klausimo pasirinkimus, pasirinkimju ilgi
    const optionLength = currentQ.options.length;
    // sukeliame pasirinkimus i possibleOpt lista
    for (let i = 0; i < optionLength; i++) {
        possibleOpt.push(i);
    }

    option.innerHTML = "";
    // atvaizduoti atsakymu variantus html
    for (let i = 0; i < optionLength; i++) {
        const opt = document.createElement("div");
        opt.innerHTML = currentQ.options[i];
        opt.id = i;
        opt.className = "form-check";
        option.appendChild(opt);
        opt.setAttribute("onclick", "getResult(this)");
    }

    countQ++;

}

// gauname vartotojo paspaudima i console, pazymime vartotojo pasirinkima spalva (teisingai-zalia, neteisingai-raudona)
let rightAnswers = 0;

function getResult(chosenOpt) {
    const id = parseInt(chosenOpt.id);
    more.innerHTML = "";
    if (id === currentQ.answer) {
        console.log("Teisingai");
        chosenOpt.style.backgroundColor = "green";
        rightAnswers++;
        console.log(rightAnswers);
        // getNewQ();
    } else {
        console.log("Neteisingai");
        chosenOpt.style.backgroundColor = "darkred";
        const optionLength = option.children.length;
        for (let i = 0; i < optionLength; i++) {
            if (parseInt(option.children[i].id) === currentQ.answer) {
                option.children[i].style.backgroundColor = "green";
            }
        }
    }
    unclick();
}

//nustatome, kad vartotojas galetu tik viena kart pasirinkti atsakyma
function unclick() {
    const optionLength = option.children.length;
    for (let i = 0; i < optionLength; i++) {
        option.children[i].classList.add("answered");
    }
}


//pakeiciame kursoriu i pointer, kai vartotojas uzeina ant pasirinkimo

function setCursorToPointer() {
    document.querySelector(".options").style.cursor = "pointer";
}

//parodomi quiz rezultatai
function theEnd() {
    quiz.classList.add("hide");
    results.classList.remove("hide");
    correctAnswers.textContent = "Teisingi atsakymai: " + rightAnswers + " iš " + questions.length;
}

//kvieciame naujus klausimus
function getNextQ() {
    if (countQ === questions.length) {
        console.log("Klausimų pabaiga");
        theEnd();
    } else {
        getNewQ();
    }
}



function tryAgain() {
    results.classList.add("hide");
    startQ.classList.remove("hide");
    resetAns();
    startQuiz();
}

function resetAns() {
    countQ = 0;
    correctAnswers = 0;
}

// pradeti quiz
function startQuiz() {
    startQ.classList.add("hide");
    quiz.classList.remove("hide");
    // gauname visus klausimus liste (possibleQ)
    setPossibleQ();
    // iskviesime nauja klausima
    getNewQ();
};






//  const startButton = document.getElementById("start");
// startButton.addEventListener("click", function) {

// }