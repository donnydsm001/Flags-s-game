//variable qui qui permettra d'afficher la region choisie.
//let continent;
//let answer;
var tableau = [];
var compteur = 1;
var score =0;


//Cette fonction permet trier les pays en fonction de la région choisie
// et les affiche sur la console.

function AfficherRegion() {
    let a = 0;
    for (let i = 0; i < countries.length; i++) {
        if (continent === countries[i].region) {
            tableau[a] = countries[i].name;
            console.log(tableau[a]);
            a = a + 1;

        }
    }
    return tableau;
}

//La fonction parcours tous les pays
//Affiche le premier pays,sa region,son drapeau et sa capitale.


function country() {
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i].name);
    }
}
console.log(countries.length);
console.log(countries[0].name + countries[0].capital + countries[0].region + countries[0].flag);

//Cette fonction permet d'afficher sur la page,le drapeau à l'indice 0,dans notre tableau ca sera celui de l'Allemagne.

function afficherDrapeau() {
   // console.log(countries[0].flag);
    document.getElementById("drap").src = "drapeaux/"+ countries[0].flag;
}
//La fonction affiche les propositions selon les regions et de manière au hasard.

function questionHasard(tableau) {
    let boutons = document.getElementsByClassName("bout");
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].innerHTML = tableau[Math.floor(Math.random() * (tableau.length))];


    }
    //Parcours les pays et affiche un drapeau au hasard avec une proposition correspondant au drapeau affiché.
    let x = Math.floor(Math.random() * (boutons.length));
    for (let i = 0; i < countries.length; i++) {
        if (boutons[x].innerHTML === countries[i].name) {
            answer = countries[i].name;
            console.log(tableau[x].innerHTML + " et " + countries[i].flag);
            document.getElementById("drap").src = "drapeaux/"+ countries[i].flag;
            break;
        }
    }

}
//la fonction met en rouge une propositon quand elle est fausse et en vert quand elle est vraie.
function faireChoix(id) {
   let bouton = document.getElementById(id);
 // let bouton = document.getElementsByClassName("bout");
    let texte = bouton.textContent;
    if (texte === answer) {
        bouton.style.backgroundColor = "green";
        score++;
        console.log('bravo');

    } else {
        console.log("dommage");
        bouton.style.backgroundColor = "red";

    }
  // $(".bout").prop("disabled", false);

}


//la fonction permet de passer à la question suivante,avec un autre drapeau et d'autres propositions.
function questionSuivante() {
    continent;
    answer;
    country;
    AfficherRegion();
    questionHasard(tableau);
    //faireChoix();



}
//Fonction qui permet de d'augmenter le nombre des questions une fois qu'on a coché la bonne ou la mauvaise réponse(case) et de passer à la question suivante.
//On a droit à 10 questions.
//et le score s'affiche sur la page.
function augmenter() {
    if (compteur < 10) {
        compteur++;
        document.getElementById("compteur").innerHTML = compteur;

    }else if(compteur===10){
        document.getElementById('compteur').innerHTML ="Game Over!"
    }
  //  score++;
    document.getElementById("score").innerHTML=score;
   continent;
    answer;
    country;
    AfficherRegion();
    questionHasard(tableau);
    faireChoix();

}
