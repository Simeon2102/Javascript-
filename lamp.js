// Sélectionne l'élément HTML avec l'identifiant 'lamp'

const lamp = document.getElementById('lamp');

// Sélectionne l'élément HTML avec l'identifiant 'lampImage'

const lampImage = document.getElementById('lampImage');

// Initialise une variable pour suivre l'état de la lampe (allumée ou éteinte)
let isLampOn = false;

// Définit une fonction pour basculer l'état de la lampe

function toggleLamp() {
    // Inverse l'état actuel de la lampe (true devient false et vice versa)
    isLampOn = !isLampOn;

    // Change l'image de la lampe en fonction de son état (allumée ou éteinte)
    // Si la lampe est allumée, charge l'image 'lamp_on.jpg', sinon charge 'lamp_off.jpg'

    lampImage.src = isLampOn ? 'lamp_on.jpg' : 'lamp_off.jpg';

    // Affiche l'image de la lampe en utilisant le style 'block'
    lampImage.style.display = 'block'; 

    // Crée un nouvel élément Audio pour jouer un son lors de la bascule de la lampe
    // Si la lampe est allumée, charge le son 'clap.mp3', sinon charge 'clap.mp3'
    const sound = new Audio(isLampOn ? 'clap.mp3' : 'clap.mp3');
    // Joue le son
    sound.play();
}
