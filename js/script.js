/* ==========================================
   GUILLAUME & ANGELA
   SCRIPT V2.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

let currentLanguage = "fr";

/* ==========================================
   TRADUCCIONES
========================================== */

const text = {

fr:{

heroText:
"NOUS AVONS LE PLAISIR<br>DE VOUS INVITER À NOTRE MARIAGE",

date:
"03 OCTOBRE 2026",

enter:
"ENTRER",

historyTitle:
"NOTRE HISTOIRE",

historyQuote:
`Il y a des rencontres qui semblent avoir été écrites
bien avant qu'elles n'aient lieu.<br><br>

Deux personnes.<br>
Deux cultures.<br>
Deux pays.<br><br>

Séparés par des milliers de kilomètres,
mais réunis par le même amour.`,

timelineTitle:
"LE GRAND JOUR",

timelineDate:
"03 OCTOBRE 2026",

event1:"Cérémonie",

freeTime:"Temps libre Découvrez Nantes",

event2:"Réception",

event3:"Vin d'honneur",

event4:"Dîner",

event5:"Soirée dansante",

event6:"Fin de la célébration",

placesTitle:
"LES LIEUX",

ceremony:
"CÉRÉMONIE",

reception:
"RÉCEPTION"
,

dressTitle:"DRESS CODE",

dressSubtitle:"Tenue élégante",

gentlemenTitle:"MESSIEURS",

gentlemenText:"Tenue de couleur beige",

ladiesTitle:"DAMES",

ladiesText:"Robe cocktail élégante de la couleur de votre choix",

rsvpTitle:"RSVP",

rsvpMessage:"Nous avons hâte de célébrer cette journée avec vous.",

confirmBtn:"Confirmer ma présence",

deadline:"Réponse souhaitée avant le 25 août 2026",

thanksTitle:"MERCI",

thanksMessage:"Merci de nous accompagner pour célébrer le début de notre histoire.",

thanksDate:"03 octobre 2026 · Nantes"

},

es:{

heroText:
"TENEMOS EL PLACER<br>DE INVITARLOS A NUESTRA BODA",

date:
"03 OCTUBRE 2026",

enter:
"ENTRAR",

historyTitle:
"NUESTRA HISTORIA",

historyQuote:
`Hay encuentros que parecen haber sido escritos
mucho antes de que ocurran.<br><br>

Dos personas.<br>
Dos culturas.<br>
Dos países.<br><br>

Separados por miles de kilómetros,
pero unidos por un mismo amor.`,

timelineTitle:
"EL GRAN DÍA",

timelineDate:
"03 OCTUBRE 2026",

event1:"Ceremonia",

freeTime:"Tiempo libre",

event2:"Recepción",

event3:"Brindis",

event4:"Cena",

event5:"Fiesta",

event6:"Fin de la celebración",

placesTitle:
"LOS LUGARES",

ceremony:
"CEREMONIA",

reception:
"RECEPCIÓN",

dressTitle:"CÓDIGO DE VESTIMENTA",

dressSubtitle:"Vestimenta elegante",

gentlemenTitle:"CABALLEROS",

gentlemenText:"Traje beige",

ladiesTitle:"DAMAS",

ladiesText:"Vestido cóctel elegante",

rsvpTitle:"CONFIRMACIÓN",

rsvpMessage:"Estamos felices de compartir este día con ustedes.",

confirmBtn:"Confirmar asistencia",

deadline:"Confirmación antes del 25 de agosto de 2026",

thanksTitle:"GRACIAS",

thanksMessage:"Gracias por acompañarnos a celebrar nuestra unión y el comienzo de nuestra historia.",

thanksDate:"03 octubre 2026 · Nantes"

}

};
/* ==========================================
   CAMBIO DE IDIOMA
========================================== */

function setLanguage(lang){

currentLanguage = lang;

document.documentElement.lang = lang;

document.getElementById("heroText").innerHTML = text[lang].heroText;

const date = document.getElementById("date");

if(date){
    date.textContent = text[lang].date;
}

document.getElementById("enterBtn").textContent = text[lang].enter;

const historyTitle = document.getElementById("historyTitle");

if(historyTitle){
    historyTitle.textContent = text[lang].historyTitle;
}

const historyQuote = document.getElementById("historyQuote");

if(historyQuote){
    historyQuote.innerHTML = text[lang].historyQuote;
}

document.getElementById("timelineTitle").textContent = text[lang].timelineTitle;

document.getElementById("timelineDate").textContent = text[lang].timelineDate;

document.getElementById("event1").textContent = text[lang].event1;
document.getElementById("eventFree").textContent = text[lang].freeTime;
document.getElementById("event2").textContent = text[lang].event2;
document.getElementById("event3").textContent = text[lang].event3;
document.getElementById("event4").textContent = text[lang].event4;
document.getElementById("event5").textContent = text[lang].event5;
document.getElementById("event6").textContent = text[lang].event6;

document.getElementById("placesTitle").textContent = text[lang].placesTitle;

document.getElementById("ceremonyTitle").textContent = text[lang].ceremony;

document.getElementById("receptionTitle").textContent = text[lang].reception;
const dressTitle=document.getElementById("dressTitle");

if(document.getElementById("dressTitle"))
document.getElementById("dressTitle").textContent=text[lang].dressTitle;

if(document.getElementById("dressSubtitle"))
document.getElementById("dressSubtitle").textContent=text[lang].dressSubtitle;

if(document.getElementById("gentlemenTitle"))
document.getElementById("gentlemenTitle").textContent=text[lang].gentlemenTitle;

if(document.getElementById("gentlemenText"))
document.getElementById("gentlemenText").textContent=text[lang].gentlemenText;

if(document.getElementById("ladiesTitle"))
document.getElementById("ladiesTitle").textContent=text[lang].ladiesTitle;

if(document.getElementById("ladiesText"))
document.getElementById("ladiesText").textContent=text[lang].ladiesText;

if(document.getElementById("rsvpTitle"))
document.getElementById("rsvpTitle").textContent=text[lang].rsvpTitle;

if(document.getElementById("rsvpMessage"))
document.getElementById("rsvpMessage").textContent=text[lang].rsvpMessage;

if(document.getElementById("confirmBtn"))
document.getElementById("confirmBtn").textContent=text[lang].confirmBtn;

if(document.getElementById("deadline"))
document.getElementById("deadline").textContent=text[lang].deadline;

if(document.getElementById("nameInput"))
document.getElementById("nameInput").placeholder =
lang=="fr" ? "Nom et prénom" : "Nombre y apellido";

if(document.getElementById("guestsInput"))
document.getElementById("guestsInput").placeholder =
lang=="fr" ? "Nombre de personnes" : "Número de asistentes";

if(document.getElementById("foodInput"))
document.getElementById("foodInput").placeholder =
lang=="fr" ? "Restrictions alimentaires" : "Restricciones alimentarias";

if(document.getElementById("thanksTitle"))
document.getElementById("thanksTitle").textContent=text[lang].thanksTitle;

if(document.getElementById("thanksMessage"))
document.getElementById("thanksMessage").textContent=text[lang].thanksMessage;

if(document.getElementById("thanksDate"))
document.getElementById("thanksDate").textContent=text[lang].thanksDate;

document.getElementById("fr").classList.remove("active");
document.getElementById("es").classList.remove("active");

document.getElementById(lang).classList.add("active");

}

/* ==========================================
   BOTONES
========================================== */

document
.getElementById("fr")
.addEventListener("click",()=>{

setLanguage("fr");

});

document
.getElementById("es")
.addEventListener("click",()=>{

setLanguage("es");

});

/* ==========================================
   BOTON ENTRER
========================================== */

document
.getElementById("enterBtn")
.addEventListener("click",()=>{

document
.getElementById("history")
.scrollIntoView({

behavior:"smooth"

});

});

/* ==========================================
   ANIMACION SCROLL
========================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

});

document
.querySelectorAll("section")
.forEach((section)=>{

observer.observe(section);

});

/* ==========================================
   INICIO
========================================== */

setLanguage("fr");

});
