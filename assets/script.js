

/****Carrousel *****/


const slides = [
	{
		imageUrl: "./assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		imageUrl: "./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		imageUrl: "./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		imageUrl: "./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>",
	}
];
/** pourquoi le span apparait ??*/

//Les variables globales

const dots = document.querySelector(".dots"); /*recupere la div dots et créer une constance*/
const arrowRight = document.querySelector(".arrow-right"); /*recupere la div arrow-right*/
const arrowLeft = document.querySelector(".arrow-left"); /*recupere la div arrow-left*/
const img = document.querySelector(".banner-img"); /*recupere la div banner-img*/
const paragraphe = document.querySelector("p"); /*recupere la div banner_txt*/	

let index = 0;



/*Fonction Main pour repertorier toutes les fonctions et faire plus propre*/
function main(){
	displayDots();
	clickRight();
	clickLeft();
}
main(); /*ne pas oublier de lancer les classes*/





//Affichage des dots (fonction displayDots)

function displayDots(){
for (let i = 0; i < slides.length; i++) {    /*variable i = 0, tant que i est inferieur à la longueur de mon tableau, i++*/
	const dot = document.createElement("div"); /*créer une div pour l'element dot*/
	dot.classList.add("dot"); /*ajoute la class dot à la div dot*/
	dots.appendChild(dot);   /*ajoute la div dot à la div dots*/
	if (i == index ){   /*si i est egal à l'index*/
		dot.classList.add("dot_selected"); /*ajoute la class dot_selected à la div dot*/
	}
}
}



/*Clic droit*/

function clickRight(){
	arrowRight.addEventListener("click", () => { /*ajout d'un evenement click*/  
	/*bien faire attention à la syntaxe et à l'ordre*/
	/*Array permet de creer un tableau*/
		const arrayDots = document.querySelectorAll(".dots .dot");/*recupere tous les dots*/
		arrayDots[index].classList.remove("dot_selected");/*supprime la class dot_selected pour pouvoir remplir les dots a chaque page*/
		index++; /*permet de passer à la page suivante*/

		if (index > slides.length - 1) { /* si mon index est egal/superieur à la longueur de mon tableau il recalcule sa valeur*/
			index = 0;
		}
		arrayDots[index].classList.add("dot_selected");  /*ajoute la class dot_selected pour remplir les dots*/
		img.src = slides[index].imageUrl;   /*recupere l'url de l'image*/
        paragraphe.innerHTML = slides[index].tagLine;   /*recupere le texte de l'image
		
		
		regarder documentation pour TextContent (il considere que cest du texte au lieu d une balise)
		la solution etait innerHTML*/

	});

}


/*Clic gauche*/


function clickLeft(){   

	arrowLeft.addEventListener("click", () => {
		const arrayDots = document.querySelectorAll(".dots .dot");
		arrayDots[index].classList.remove("dot_selected");
		index--; /*permet de revenir en arriere*/

		if (index < 0) {  /* si mon index est egal à 0 il recalcule sa valeur*/
			index = slides.length - 1;
		}
		arrayDots[index].classList.add("dot_selected");
		img.src = slides[index].imageUrl;
        paragraphe.innerHTML = slides[index].tagLine;

	});

}
