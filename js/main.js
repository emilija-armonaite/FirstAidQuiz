// sukuriame objektu (klausimu) lista
const questions = [{
    question: "Įvyko nelaimingas atsitikimas, yra nukentėjusiųjų. Koks Jūsų pats pirmas veiksmas?",
    options: ["Pradedate daryti pirminį gaivinimą", "Bandote kalbėti su nukentėjusiuoju", "Apsidarote, įvertinate aplinką ir galimus pavojus", "Bėgate ieškoti išorinio automationio defibriliatoriaus"],
    answer: 2,
    additionalInfo: "Prieš teikdami pirmąją pagalbą, įvertinkite situaciją ir įsitikinkite, kad tai yra saugu (jei situacija yra pavojinga Jūsų gyvybei ar sveikatai, pavyzdžiui: pravažiuojantis transportas, griūvantys, krentantys objektai, gaisras, elektra, kenksmingos medžiagos, nukentėjusysis yra agresyvus, galite užsikrėsti infekcine liga – šiais atvejais pirmiausia reikia užtikrinti saugumą)."
}, {
    question: "Kodėl reikia įvertinti įvykio vietos saugumą? ",
    options: ["Siekiant įsitikinti, jog situacija nepavojinga gelbėtojo gyvybei ar sveikatai", "Siekiant užtikrinti nukentėjusiojo saugumą", "Siekiant išsiaiškinti nelaimingo atsitikimo/avarijos priežastis"],
    answer: 0,
}, {
    question: "Įvertinus, kad aplinka saugi, einate prie nukentėjusiojo. Jis yra sąmoningas, atsakinėja į klausimus aiškiai ir rišliai. Ką darote toliau?",
    options: ["Pradedate daryti pirminį gaivinimą", "Nukentėjusįjį nuraminate, apžiūrite ir jei reikia, suteikiate pirmąją pagalbą, kviečiate GMP", "Staigiai transportuojate nukentėjusįjį į kitą vietą, net jei aplinka saugi", "Defibriliuojate"],
    answer: 1,
    additionalInfo: "Nuraminkite jį; Stenkitės nejudinti, nebent aplinkoje tvyro pavojus nukentėjusiajam ar teikiančiam pagalbą; Apžiūrėkite nukentėjusįjį: pačiupinėkite jį nuo galvos iki kojų; Suteikite pirmąją pagalbą; Jeigu būtina, kvieskite greitąją medicinos pagalbą"
}, {
    question: "Kaip padėti žmogui, ištiktam psichologinio streso?",
    options: ["Nuraminti, šiltai apkloti, pasakyti, kad jau atvyksta greitoji medicinos pagalba", "Nieko nedaryti, laukti, kol atvyks greitoji medicinos pagalba", "Sugirdyti raminanamųjų vaistų"],
    answer: 0,
}, {
    question: "Įvertinus, kad aplinka saugi, einate prie nukentėjusiojo. Jis neatsako į jūsų užduodamus klausimus, yra nesąmoningas. Ką darote?",
    options: ["Pradedate gaivinimą, paprašote šalia esančio žmogaus (praeivio), kad kviestų GMP ir atneštų automatinį išorinį defibriliatorių (AID)", "Pradedate gaivinimą, tuo metu pats kviečiate greitąją medicinos pagalbą, net jei aplinkui daug žmonių, kurie tai galėtų padaryti", "Staigiai transportuojate nukentėjusįjį į kitą vietą, net jei aplinka saugi", "Bandote prakalbinti nukentėjusįjį"],
    answer: 0,
    additionalInfo: "Kvieskite greitąją medicinos pagalbą, paprašykite pristatyti išorinį automatinį defibriliatorių; Pradėkite gaivinimą."
}, {
    question: "Kaip įvertinti pagrindines gyvybines funkcijas?",
    options: [" Stebėti, ar kvėpuoja (stebėti, ar juda krūtinės ląsta, pajausti oro judėjimą skruostu)", "Pakalbinti („Kaip jaučiatės? Kas atsitiko?), stebėti, ar kvėpuoja (stebėti, ar juda krūtinės ląsta, pajausti oro judėjimą skruostu), čiuopti pulsą (miego arterijos srityje)", "Pakalbinti („Kaip jaučiatės? Kas atsitiko?), čiuopti pulsą (miego arterijos srityje). "],
    answer: 1,
}, {
    question: "Bendrosios pagalbos numeris 112:",
    options: ["Naudojamas tik Lietuvoje", "Naudojamas visoje Europoje"],
    answer: 1,
}, {
    question: "Paskambinus bendrosios pagalbos numeriu 112 negalima padėti ragelio, kol neleis operatorius.",
    options: ["Tiesa", "Netiesa"],
    answer: 0,
    additionalInfo: "Nepadėkite ragelio, kol neleis operatorius – pokalbį turi baigti pagalbos tarnybos dispečeris. Kvalifikuoti specialistai skirtingose šalyse pasiruošę telefonu instruktuoti, kaip suteikti pirmąją pagalbą."
}, {
    question: "Teisingas pradinio gaivinimo algoritmas.",
    options: ["Kraujotakos užtikrinimas (Circulation), kvėpavimo užtikrinimas (Breathing), kvėpavimo takų atvėrimas (Airway)", "Kvėpavimo takų atvėrimas (Airway), kraujotakos užtikrinimas (Circulation), kvėpavimo užtikrinimas (Breathing)", "Kvėpavimo takų atvėrimas (Airway), kvėpavimo užtikrinimas (Breathing), kraujotakos užtikrinimas (Circulation)"],
    answer: 2,
}, {
    question: "Paspaudimus ir įpūtimus reikia kartoti santykiu 30:2.",
    options: ["Tiesa", "Netiesa"],
    answer: 0,
}, {
    question: "Krūtinė spaudžiama visa rankų jėga, paspaudimų gylis turi būti iki 3cm:",
    options: ["Tiesa", "Netiesa"],
    answer: 1,
}, {
    question: "Kiek laiko reikia gaivinti nukentėjusįjį?",
    options: ["Kol atvyks greitoji medicinos pagalba", "45 minutes", "Kol atkuriama kraujotaka ir kvėpavimas, atvyksta greitoji medicinos pagalba, atsiranda biologinės mirties požymių, gaivintojas išsenka arba iškyla grėsmė jo gyvybei"],
    answer: 2,
}, {
    question: "Kokia yra pirmosios pagalbos veiksmų seka?",
    options: ["Paskambink, padėk, patikrink", "Patikrink, paskambink, padėk", "Padėk, patikrink, paskambink"],
    answer: 1,
}, {
    question: "Gaivinimas tęsiamas tol, kol:",
    options: ["Atvyksta kvalifikuota pagalba", "Atsistato kraujotaka ir kvėpavimas (žmogus pats pradeda kvėpuoti ar kosėti)", "Atsiranda biologinės mirties požymių", "Gaivintojas visiškai išsenka arba jo gyvybei iškyla tiesioginė  grėsmė", "Visi variantai teisingi"],
    answer: 4,
}, {
    question: "Jeigu pagalbą teikiantis asmuo nėra profesionalus gaivintojas ar nenori/ negali daryti dirbtinio kvėpavimo, gaivinti nukentėjusįjį gali atlikdamas tik krūtinės paspaudimus: 100 krūtinės paspaudimų per 1 min.",
    options: ["Tiesa", "Netiesa"],
    answer: 0,
}, {
    question: "Ką daryti teikiant pirmąją pagalbą, jei užspringęs žmogus sąmoningas? ",
    options: ["Duoti atsigerti vandens, kad svetimkūnis nuslinktų gilyn", "Skatinti kosulį, jei taip svetimkūnis nepasišalino, palenkti nukentėjusįjį per liemenį galva žemyn ir atlikti 5 stūmius per nugarą tarp menčių", "Suduoti keletą kartų per nugarą"],
    answer: 1,
}, {
    question: "Kaip gaivinti sąmonės netekusį užspringusįjį, esant visiškam kvėpavimo takų nepraeinamumui? ",
    options: ["Kviesti GMP, nukentėjusįjį paguldyti ant nugaros ir atlikti 30 krūtinės ląstos paspaudimų", "Kviesti GMP, nukentėjusįjį atversti ant nugaros, pravėrus burną pašalinti matomus maisto likučius, atlikti 2 oro įpūtimus per burną ir 30 krūtinės ląstos paspaudimų. ", "Kviesti greitąją medicinos pagalbą, nukentėjusįjį palenkti per liemenį galva žemyn ir suduoti keletą kartų per nugarą"],
    answer: 1,
}, {
    question: "Kokie pirmosios pagalbos ypatumai užspringus kūdikiui?",
    options: ["Paguldyti kūdikį ant rankos dilbio veidu žemyn. Kitos rankos delno pagrindu 5 kartus smūgiuoti į nugarą tarp menčių", "Paėmus kūdikį už kojų galva žemyn 5 kartus stipriai pakratyti", "Kišti pirštą užspringusiam kūdikiui į burną ir įstumti gilyn svetimkūnį"],
    answer: 0,
}, {
    question: "Kodėl užspringusio kūdikio negalima kratyti už kojų?",
    options: [" Galima netyčia išmesti iš rankų. ", "Galima sulaužyti kaklo slankstelius, sukrėsti smegenis ar sužeisti galvoje esančias kraujagysles", "Galima jį labai išgąsdinti"],
    answer: 1,
}, ];

// kintamieji 
const mainBox = document.querySelector(".main-box");
const startQ = document.querySelector(".startPage");
const quiz = document.querySelector(".quiz");
const question = document.querySelector(".question h4");
const option = document.querySelector(".options");
const results = document.querySelector(".results");
const correctAnswers = document.querySelector(".correctAnswers");
const button = document.querySelector(".btn.hide");
const footer = document.querySelector("#footer");
let countQ = 0;
let currentQ;
let allQ = [];
let allOpt = [];


// pradedame klausimyna 
function startQuiz() {
    startQ.classList.add("hide");
    quiz.classList.remove("hide");
    setAllQ();
    getNewQ();
}


// sukeliame visus klausimaus i lista - allQ
function setAllQ() {
    const total = questions.length;
    for (let i = 0; i < total; i++) {
        allQ.push(questions[i]);
    }
}

// gauname nauja klausima 
function getNewQ() {
    const qNumber = allQ[0];
    currentQ = qNumber;
    question.innerHTML = currentQ.question;
    // gauname pozicija klausimo is allQ listo
    const index = allQ.indexOf(qNumber);
    // kad nesikartotu klausimai, tai istriname qNumber is allQ
    allQ.splice(index, 1);
    //gauname klausimo pasirinkimus, pasirinkimju ilgi
    const optionLength = currentQ.options.length;
    // sukeliame pasirinkimus i allOpt lista
    for (let i = 0; i < optionLength; i++) {
        allOpt.push(i);
    }

    option.innerHTML = "";
    // atvaizduojami klausimu atsakymu variantai html
    for (let i = 0; i < optionLength; i++) {
        const opt = document.createElement("div");
        opt.innerHTML = currentQ.options[i];
        opt.id = i;
        opt.className = "form-text";
        option.appendChild(opt);
        opt.setAttribute("onclick", "getResult(this)");
    }
    countQ++;
}

// gauname vartotojo paspaudima i console, pazymime vartotojo pasirinkima spalva (teisingai-zalia, neteisingai-raudona)
let rightAnswers = 0;

function getResult(chosenOpt) {
    button.classList.add("hide");
    const id = parseInt(chosenOpt.id);
    if (id === currentQ.answer) {
        console.log("Teisingai");
        chosenOpt.style.backgroundColor = "green";
        rightAnswers++;
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
        button.classList.remove("hide");
    }
}

//kvieciame naujus klausimus
function getNextQ() {
    if (countQ === questions.length) {
        console.log("Klausimų pabaiga");
        theEnd();
    } else {
        getNewQ();
        button.classList.add("hide");
    }
}

//pakeiciame kursoriu i pointer, kai vartotojas uzeina ant klausimo pasirinkimo
let setCursorToPointer = () => option.style.cursor = "pointer";

//parodomi klausimyno rezultatai (pabaigos puslapis)
function theEnd() {
    quiz.classList.add("hide");
    results.classList.remove("hide");
    mainBox.style.height = "100%";
    footer.style.display = "relative";
    correctAnswers.textContent = "Testas įveiktas! Teisingi atsakymai: " + rightAnswers + " iš " + questions.length;
}

// pabaigos puslapyje paspaudziant mygtuka, griztame i klausimus, anuliuojame surinkus rezultatus
function tryAgain() {
    results.classList.add("hide");
    startQ.classList.remove("hide");
    let correctAnswers = 0;
    let countQ = 0;
    startQuiz();
}