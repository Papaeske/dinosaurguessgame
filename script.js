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
    'nodosaurus',
    'pachycephalosaurus',
    'quetzalcoatlus',
    'raptor',
    'sarcosuchus',
    'tapejara',
    'udanoceratops',
    'vulcanodon',
    'wuerhosaurus',
    'xenoceratops',
    'yangchuanosaurus',
    'zalmoxes'
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
    'Nodosaurus',
    'Pachycephalosaurus',
    'Quetzalcoatlus',
    'Raptor',
    'Sarcosuchus',
    'Tapejara',
    'Udanoceratops',
    'Vulcanodon',
    'Wuerhosaurus',
    'Xenoceratops',
    'Yangchuanosaurus',
    'Zalmoxes'
];
const hints = [
    'One of the largest carnivorous dinosaurs that ever lived',
    'A small, fast predator known for its sickle-shaped claws',
    'A heavily armored herbivore with distinctive plates on its back',
    'A massive herbivore with three horns and a bony frill on its head',
    'A giant herbivore with a long neck and forelimbs',
    'A long-necked herbivore with a whip-like tail',
    'A heavily armored herbivore with a club-like tail',
    'An early bird-like dinosaur with feathers',
    'A large carnivorous dinosaur with sharp teeth and claws',
    'A herbivore with a distinctive hollow crest on its head',
    'A large herbivore with long claws on its hands',
    'One of the largest carnivorous dinosaurs that ever lived, with a sail on its back',
    'A small carnivorous dinosaur known for its sickle-shaped claws and role in the Jurassic Park franchise',
    'A fast, ostrich-like dinosaur that lived in herds',
    'A small carnivorous dinosaur known for stealing and eating the eggs of other dinosaurs',
    'A venomous carnivorous dinosaur with a frill around its neck',
    'A large herbivore known for its thumb spike',
    'A small feathered dinosaur with sharp teeth and claws',
    'A small, bird-like dinosaur with a large brain and big eyes',
    'A large carnivorous dinosaur with small arms and horns above its eyes',
    'A fast, bird-like dinosaur that lived in herds',
    'A small, bird-like dinosaur with a toothless beak',
    'One of the largest dinosaurs that ever lived, with a long neck and tail',
    'A long-necked herbivore with a small head and long tail',
    'A flying reptile with a wingspan up to 33 feet',
    'A small carnivorous dinosaur known for its role in the Jurassic Park franchise',
    'A large carnivorous dinosaur with a distinctive crest on its head',
    'A large herbivore with a shield of bony plates on its back',
    'One of the largest carnivorous dinosaurs that ever lived, with massive jaws and teeth',
    'A heavily armored herbivore with spikes on its back and tail',
    'A large herbivore with a thick skull and bony dome on its head',
    'A giant flying reptile with a wingspan up to 36 feet',
    'A small, fast predator with sharp teeth and claws',
    'A prehistoric crocodile with long jaws and sharp teeth',
    'A small flying reptile with a distinctive head crest',
    'A herbivore with a large frill around its head',
    'A large herbivore with a dome-shaped skull and bony spikes on its tail',
    'A giant flying reptile with a long, narrow beak',
    'A large herbivore with distinctive spiky plates on its back',
    'A medium-sized herbivore with a distinctive pattern of bony spikes on its head',
    'A large carnivorous dinosaur with a long, narrow snout and sharp teeth',
    'A small herbivore with a distinctive bony frill on its head'
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
    // Give the player one point for a correct guess
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
    guessesContainer.innerHTML = 'Guesses: ' + guesses.join(', ');
}

function checkWin() {
    if (word.split('').every(letter => guesses.includes(letter))) {
        let dinosaurContainer = document.getElementById('dinosaur-container');
        dinosaurContainer.innerHTML = 'Dinosaur: ' + dinosaurName;
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