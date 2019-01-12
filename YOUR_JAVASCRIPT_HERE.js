// my js
let hero = {
    name: 'Superwoman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword',
        damage: 2
    },
};

let hero2 = {
    name: 'Hancock',
    heroic: true,
    inventory: [
        {
            type: 'bazooka',
            damage: 5
        },
        {
            type: 'racket',
            damage: 4
        },
    ],
    health: 10,
    weapon: {
        type: 'pistol',
        damage: 3
    },
};

const dagger = {
    type: 'dagger',
    damage: 2
};

const changeNameForm = document.getElementById('changeNameForm');
const textDisplay = document.getElementById('textDisplay');
const imgFight = document.getElementById('fight');
let imgDagger = document.getElementById('dagger');
let currentHero = hero;

function rest(object) {
    object.health = 10;
    textDisplay.innerHTML = `${object.name} has rested and has ${object.health} health again.`;
    showStats(currentHero);
    return object;
};

function pickUpItem(whoPicks, pickedWeapon) {
    whoPicks.inventory.push(pickedWeapon);
    textDisplay.innerHTML = `${whoPicks.name} gained ${pickedWeapon.type} with ${pickedWeapon.damage} damage.`;
    toggleDisplay(imgDagger);
    showStats(currentHero);
};

function equipWeapon(whomEquip) {
    if (whomEquip.inventory.length > 0) {
        let newWeapon = whomEquip.inventory.shift();
        whomEquip.weapon = newWeapon;
    };
    showStats(currentHero);
    textDisplay.innerHTML = `${whomEquip.name} is now equipped with ${whomEquip.weapon.type}.`;
};

// bonus

function showStats(object) {
    let heroName = document.getElementById('heroName');
    let heroHealth = document.getElementById('heroHealth');
    let currentWeapon = document.getElementById('currentWeapon');
    heroName.innerHTML = `Hero's name: ${object.name}`;
    heroHealth.innerHTML = `${object.name}'s health: ${object.health}`;
    currentWeapon.innerHTML = `${object.name}'s current weapon: ${object.weapon.type}`;
}

function switchHero() {
    if (currentHero === hero) {
        currentHero = hero2;
    } else {
        currentHero = hero;
    }
    imgDagger.style.display = 'block';
    imgFight.style.display = 'block';
    showStats(currentHero);
}

function changeName(object) {
    event.preventDefault();
    const inputField = document.getElementById('name');
    const newName = inputField.value;
    if (!newName) {
        alert('Type your new name');
    } else {
        object.name = newName;
        inputField.value = null;
        toggleDisplay(changeNameForm);
        showStats(currentHero);
    }
}

function fightsEnemy(whoFights) {
    let damage = Math.floor((Math.random() * 10));
    whoFights.health = whoFights.health - damage;
    if (whoFights.health <= 0) {
        textDisplay.innerText = `What a fight! Unfortunately ${whoFights.name} lost ${damage} and is dead.`;
    } else {
        textDisplay.innerText = `What a fight! ${whoFights.name} lost ${damage} health points!`;
    }
    toggleDisplay(imgFight);
    showStats(currentHero);
}

function toggleDisplay(object) {
    let computedStyle = window.getComputedStyle(object);
    if (computedStyle.display === "block") {
        object.style.display = "none";
    } else {
        object.style.display = "block";
    }
}

showStats(currentHero);
