// kuriame objektu (klausimu) lista
const questions = [{
        question: "Įvyko nelaimingas atsitikimas, yra nukentėjusiųjų. Koks Jūsų pats pirmas veiksmas?",
        options: ["Pradedate daryti pirminį gaivinimą",
            "Bandote kalbėti su nukentėjusiuoju",
            "Apsidarote, įvertinate aplinką ir galimus pavojus",
            "Bėgate ieškoti išorinio automationio defibriliatoriaus"
        ],
        answer: 2
    }, {
        question: "Įvertinus, kad aplinka saugi, einate prie nukentėjusiojo. Jis yra sąmoningas, atsakinėja į klausimus aiškiai ir rišliai. Ką darote toliau?",
        options: ["Pradedate daryti pirminį gaivinimą",
            "Nukentėjusįjį nuraminate, apžiūrite ir jei reikia, suteikiate pirmąją pagalbą, kviečiate GMP",
            "Staigiai transportuojate nukentėjusįjį į kitą vietą, net jei aplinka saugi",
            "Defibriliuojate"
        ],
        answer: 1
    }, {
        question: "Įvertinus, kad aplinka saugi, einate prie nukentėjusiojo. Jis neatsako į jūsų užduodamus klausimus, yra nesąmoningas. Ką darote?",
        options: ["Pradedate gaivinimą, paprašote šalia esančio žmogaus (praeivio), kad kviestų GMP ir atneštų automatinį išorinį defibriliatorių (AID)",
            "Pradedate gaivinimą, tuo metu pats kviečiate greitąją medicinos pagalbą, net jei aplinkui daug žmonių, kurie tai galėtų padaryti",
            "Staigiai transportuojate nukentėjusįjį į kitą vietą, net jei aplinka saugi",
            "Bandote prakalbinti nukentėjusįjį"
        ],
        answer: 0
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
        answer: 0
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
        answer: 1
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

const question = document.querySelector(".question h4");
const option = document.querySelector(".options");

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

// gauname atsitiktini klausima 
function getNewQ() {
    const qNumber = possibleQ[Math.floor(Math.random() * possibleQ.length)];
    currentQ = qNumber;
    question.innerHTML = currentQ.question;

    // gauname pozicija klausimo is possibleQ listo
    const index = possibleQ.indexOf(qNumber);
    // kad nesikartotu klausimai, tai istriname qNumber is possibleQ
    possibleQ.splice(index, 1);
    // console.log(qNumber);
    // console.log(possibleQ);

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
        opt.setAttribute("onclick", "result(this)");
    }

    countQ++;
}

//gauname vartotojo paspaudima
function result(chosenOpt) {

    const id = parseInt(chosenOpt.id);
    if (id === currentQ.answer) {
        console.log("Teisingai");
    } else {
        console.log("Neteisingai");
    }
}

//pakeiciame kursoriu, kai vartotojas uzeina ant pasirinkimo

function changeCursorToPointer(chosenOpt) {
var selected = chosenOpt.selectedIndex;
  document.body.style.cursor = selected.options[chosenOpt].text;
}




























function nextQ() {
    if (countQ === questions.length) {
        console.log("The end");
    } else {
        getNewQ();
    }

}


window.onload = function() {
    // gauname visus klausimus liste (possibleQ)
    setPossibleQ();
    //iskviesime nauja klausima
    getNewQ();
};






const startButton = document.getElementById("start");
// const nextButton = document.getElementById("next");