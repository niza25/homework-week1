// Write your JS here
let hero = {
    name: 'Superman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword',
        damage: 2
    },
};

let hero2 = {
    name: 'Superwoman',
    heroic: true,
    inventory: [],
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
const container = document.getElementById('container');
const statsDisplay = document.getElementById('statsDisplay');
let currentHero = hero;

function switchHero(){
    if(currentHero === hero){
        currentHero = hero2;
    } else {
        currentHero = hero;
    }
    displayStats(currentHero);
}

function rest(object) {
    object.health = 10;
    statsDisplay.innerHTML = `${object.name} rested and has ${object.health} health again.`;
    return object;
};

function pickUpItem(whoPicks, pickedWeapon) {
    whoPicks.inventory.push(pickedWeapon);
    statsDisplay.innerHTML = `${whoPicks.name} gained ${pickedWeapon.type} with ${pickedWeapon.damage} damage.`;
};

function equipWeapon(whomEquip) {
    if (whomEquip.inventory.length > 0) {
        let newWeapon = whomEquip.inventory.shift();
        whomEquip.weapon = newWeapon;
    };
    statsDisplay.innerHTML = `${whomEquip.name} is now equipped with ${whomEquip.weapon.type}.`;
};

// this is what I got

function displayStats(object) {
    statsDisplay.innerText = `${object.name} has ${object.health} health and currently carries ${object.weapon.type} with ${object.weapon.damage} damage.`;
    console.log(statsDisplay);
}

function toggleFormDisplay() {
    let computedStyle = window.getComputedStyle(changeNameForm);
    if (computedStyle.display === "none") {
        changeNameForm.style.display = "block";
    } else {
        changeNameForm.style.display = "none";
    }
}

function changeName(object) {
    event.preventDefault();
    const inputField = document.getElementById('name');
    const newName = inputField.value;
    object.name = newName;
    displayStats(object);
    inputField.value = null;
    toggleFormDisplay();
}

function fightsEnemy(whoFights){
    let damage = Math.floor((Math.random() *10));
    whoFights.health = whoFights.health - damage;
    console.log(hero.health);
    statsDisplay.innerText = `What a fight! ${whoFights.name} lost ${damage} health points!`;
}

