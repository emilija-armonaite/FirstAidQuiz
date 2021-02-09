// kuriame objektu (klausimu) lista
const questions = [ {
	question:"Įvyko nelaimingas atsitikimas, yra nukentėjusiųjų. Koks Jūsų pats pirmas veiksmas? (1 teisingas atsakymas)",
	options:["Pradedate daryti pirminį gaivinimą","Bandote kalbėti su nukentėjusiuoju","Apsidarote, įvertinate aplinką ir galimus pavojus","Bėgate ieškoti išorinio automationio defibriliatoriaus"],
	answer:2
}, {
	question:"Įvertinus, kad aplinka saugi, einate prie nukentėjusiojo. Jis yra sąmoningas, atsakinėja į klausimus aiškiai ir rišliai. Ką darote toliau? (2 teisingi atsakymai)",
	options:["Pradedate daryti pirminį gaivinimą","Nukentėjusįjį nuraminate, apžiūrite ir jei reikia, suteikiate pirmąją pagalbą","Staigiai transportuojate nukentėjusįjį į kitą vietą, net jei aplinka saugi","Defibriliuojate","Jei būtina, kviečiate greitąją medicinos pagalbą"],
	answer:3

}
]

const question = document.getElementById("question");
const option = document.getElementById("option");


// let optionDelay = 0.2; 
// optionDelay += 0.2;