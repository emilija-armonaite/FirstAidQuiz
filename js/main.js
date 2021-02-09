// kuriame objektu (klausimu) lista
const questions = [{
        question: "Įvyko nelaimingas atsitikimas, yra nukentėjusiųjų. Koks Jūsų pats pirmas veiksmas?",
        options: ["Pradedate daryti pirminį gaivinimą", "Bandote kalbėti su nukentėjusiuoju", "Apsidarote, įvertinate aplinką ir galimus pavojus", "Bėgate ieškoti išorinio automationio defibriliatoriaus"],
        answer: 2
    }, {
        question: "Įvertinus, kad aplinka saugi, einate prie nukentėjusiojo. Jis yra sąmoningas, atsakinėja į klausimus aiškiai ir rišliai. Ką darote toliau?",
        options: ["Pradedate daryti pirminį gaivinimą", "Nukentėjusįjį nuraminate, apžiūrite ir jei reikia, suteikiate pirmąją pagalbą, kviečiate GMP", "Staigiai transportuojate nukentėjusįjį į kitą vietą, net jei aplinka saugi", "Defibriliuojate"],
        answer: 3
    }, {
        question: "Įvertinus, kad aplinka saugi, einate prie nukentėjusiojo. Jis neatsako į jūsų užduodamus klausimus, yra nesąmoningas. Ką darote? (3 teisingi atsakymai)",
        options: ["Pradedate gaivinimą", "Kviečiate greitąją medicinos pagalbą", "Apsidarote, įvertinate aplinką ir galimus pavojus", "Bėgate ieškoti išorinio automationio defibriliatoriaus"],
        answer: 2
    }
    // }, {
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
    // }, {
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
    // }, {
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


]

const question = document.querySelector(".question h4");
const option = document.querySelector(".option");

let countQ = 0;
let currentQ;
let possibleQ = [];

// sukeliame visus galimi klausimai i lista (possibleQ)

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
   	possibleQ.splice(index,1);
// console.log(qNumber);
    countQ++;
//gauname klausimo pasirinkimus
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
}




// let optionDelay = 0.2; 
// optionDelay += 0.2;

const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");