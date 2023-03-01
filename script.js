const words = [
    'tyrannosaurus',
    'velociraptor',
    'stegosaurus',
    'triceratops',
    'brachiosaurus',
    'diplodocus',
    'ankylosaurus',
    'archaeopteryx',
    'allosaurus',
    'parasaurolophus',
    'therizinosaurus',
    'spinosaurus',
    'deinonychus',
    'gallimimus',
    'oviraptor',
    'dilophosaurus',
    'iguanodon',
    'sinornithosaurus',
    'troodon',
    'carnotaurus',
    'ornithomimus',
    'ovipterix',
    'sauroposeidon',
    'tsintaosaurus',
    'brontosaurus',
    'pterodactyl',
    'compsognathus',
    'cryolophosaurus',
    'dimorphodon',
    'einiosaurus',
    'giganotosaurus',
    'kentrosaurus',
    'maiasaura',
];
const dinosaurs = [
    'Tyrannosaurus',
    'Velociraptor',
    'Stegosaurus',
    'Triceratops',
    'Brachiosaurus',
    'Diplodocus',
    'Ankylosaurus',
    'Archaeopteryx',
    'Allosaurus',
    'Parasaurolophus',
    'Therizinosaurus',
    'Spinosaurus',
    'Deinonychus',
    'Gallimimus',
    'Oviraptor',
    'Dilophosaurus',
    'Iguanodon',
    'Sinornithosaurus',
    'Troodon',
    'Carnotaurus',
    'Ornithomimus',
    'Ovipterix',
    'Sauroposeidon',
    'Tsintaosaurus',
    'Brontosaurus',
    'Pterodactyl',
    'Compsognathus',
    'Cryolophosaurus',
    'Dimorphodon',
    'Einiosaurus',
    'Giganotosaurus',
    'Kentrosaurus',
    'Maiasaura',
];
const hints = [
    'One of the largest carnivorous dinosaurs that ever lived.',
    'A small, agile dinosaur with a deadly curved claw on each foot.',
    'A herbivorous dinosaur with distinctive rows of bony plates along its back and a spiked tail.',
    'A large, herbivorous dinosaur with three horns on its head and a frill around its neck.',
    'A giant herbivorous dinosaur with a long neck and front legs that were longer than its back legs.',
    'Another giant herbivorous dinosaur with a very long neck and a whip-like tail.',
    'A heavily armored herbivorous dinosaur with a club-like tail.',
    'A small, bird-like dinosaur with feathers and wings, believed to be an early ancestor of birds.',
    'A large carnivorous dinosaur with sharp teeth and claws.',
    'A herbivorous dinosaur with a distinctive curved crest on its head.',
    'A large, herbivorous dinosaur with long, sharp claws that may have been used for self-defense or for reaching leaves on tall trees.',
    'A large, carnivorous dinosaur with a sail-like structure on its back and long, narrow jaws filled with sharp teeth.',
    'A carnivorous dinosaur with sharp teeth and sickle-shaped claws on each foot.',
    'A fast-running, ostrich-like dinosaur with a long, slender neck and sharp claws on its hands and feet.',
    'A small, bird-like dinosaur with a beak and feathered arms, which may have been used to brood its eggs.',
    'A carnivorous dinosaur with distinctive crests on its head and a venomous bite, as portrayed in the movie Jurassic Park (though this is not accurate to the real dinosaur).',
    'A herbivorous dinosaur with a thumb spike that may have been used for defense or foraging.',
    'A small, feathered dinosaur with sharp teeth and claws.',
    'A small, carnivorous dinosaur with a large brain relative to its body size.',
    'A carnivorous dinosaur with two small horns on its head and a thick, muscular neck.',
    'A fast-running dinosaur with a toothless beak and long, powerful legs.',
    'A small, bird-like dinosaur with a toothless beak and feathers.',
    'A giant, herbivorous dinosaur with a very long neck and tail.',
    'A herbivorous dinosaur with a large, bony crest on its head.',
    'A large, herbivorous dinosaur with a long neck and tail.',
    'Not actually a dinosaur, but a type of flying reptile with wings made of skin.',
    'A small, carnivorous dinosaur with sharp teeth and three-fingered hands.',
    'A large, carnivorous dinosaur with a distinctive crest on its head.',
    'A flying reptile with a long tail and large wingspan.',
    'A herbivorous dinosaur with a single horn on its head.',
    'A large, carnivorous dinosaur with sharp teeth and long, muscular legs.',
    'A heavily armored herbivorous dinosaur with long, pointed spikes on its back and tail.',
    'A herbivorous dinosaur with a beak and a crest on its head.'
];

let word; // the word to guess
let guesses = []; // letters that have been guessed
let lives; // number of lives remaining
let score = 0;

function updateScore() {
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.innerText = `Score: ${score}`;
}

function handleCorrectGuess() {
    // Give the player one point for a correct guess!
    score++;
    updateScore();
  }

  function handleWrongGuess() {
    // Deduct one point for a wrong guess
    score--;
    updateScore();
  }

function chooseWord() {
    const index = Math.floor(Math.random() * words.length);
    word = words[index];
    dinosaurName = dinosaurs[index];
    dinosaurHint = hints[index];
}

function displayWord() {
    let wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';
    for (let i = 0; i < word.length; i++) {
        if (guesses.includes(word[i])) {
            wordContainer.innerHTML += word[i] + ' ';
        } else {
            wordContainer.innerHTML += '_ ';
        }
    }
}

function displayGuesses() {
    let guessesContainer = document.getElementById('guesses-container');
    guessesContainer.innerHTML = 'Lives: ' + lives + ', Guesses: ' + guesses.join(', ');
}

function checkWin() {
    if (word.split('').every(letter => guesses.includes(letter))) {
        fireConfetti();
        handleCorrectGuess();
    }
}

function checkLose() {
    if (lives === 0) {
        alert('You lose! The word was ' + word + '.');
        handleWrongGuess();
        restart();
    }
}

function handleGuess(letter) {
    if (!guesses.includes(letter)) {
        guesses.push(letter);
        if (!word.includes(letter)) {
            lives--;
        }
        displayWord();
        displayGuesses();
        checkWin();
        checkLose();
    }
}

function restart() {
    chooseWord();
    guesses = [];
    lives = 7;
    displayWord();
    displayGuesses();
    let dinosaurContainer = document.getElementById('dinosaur-container');
    dinosaurContainer.innerHTML = '';
    let hintContainer = document.getElementById('hint-container');
    hintContainer.innerHTML = '';
    hintContainer.style.display = 'none';
    hintButton.style.display = 'block';
}

function fireConfetti() {
    const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };
  
  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        angle: 270,
        origin: { y: 0.0 },
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }
  
  fire(0.5, {
    spread: 2300,
    startVelocity: 55,
  });
  
  fire(0.5, {
    spread: 2300,
  });
  
  fire(0.5, {
    spread: 2300,
    decay: 0.91,
    scalar: 0.8,
  });
  
  fire(0.3, {
    spread: 2300,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  
  fire(0.3, {
    spread: 2300,
    startVelocity: 45,
  });
}

// start a new game
chooseWord();
guesses = [];
lives = 7;
displayWord();
displayGuesses();

// add event listeners
let restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', restart);

let hintButton = document.getElementById('hint-button');
hintButton.addEventListener('click', giveHint);

function giveHint() {
    let hintContainer = document.getElementById('hint-container');
    hintButton.style.display = 'none';
    hintContainer.style.display = 'block';
    hintContainer.innerHTML = 'Hint: ' + dinosaurHint;
    hintContainer.classList.add('slide-in'); // add animation class
}

document.addEventListener('keydown', event => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        handleGuess(event.key.toLowerCase());
    }
});