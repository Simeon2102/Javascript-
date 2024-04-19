
const randomNumber = Math.floor(Math.random() * 100) + 1;     //Générer un nombre aléatoire entre 1 et 100

// Récupérer le bouton de vérification et les éléments d'entrée et de retour
const checkButton = document.getElementById('checkButton');
const userGuessInput = document.getElementById('userGuess');
const feedback = document.getElementById('feedback');

// Ajouter un écouteur d'événements au bouton de vérification


checkButton.addEventListener('click', function() {

  // Récupérer la valeur saisie par l'utilisateur et la convertir en nombre entier

  const userGuess = parseInt(userGuessInput.value);

  // Vérifier si la valeur saisie n'est pas un nombre ou n'est pas entre 1 et 100

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {

    feedback.textContent = 'Veuillez entrer un nombre entre 1 et 100.';

  } else { 

    // Comparer la valeur saisie avec le nombre aléatoire généré

    if (userGuess < randomNumber) {

      feedback.textContent = 'Le nombre est trop petit.';

    } else if (userGuess > randomNumber) {

      feedback.textContent = 'Le nombre est trop grand.';

    } else {
      feedback.textContent = 'Bravo ! Vous avez deviné le bon nombre.';
    }
  }
  // Effacer le champ d'entrée après chaque vérification
  userGuessInput.value = '';
});

