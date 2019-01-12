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

const dagger = {
    type: 'dagger',
    damage: 2
};

function rest(object) {
    object.health = 10;
    return object;
};

function pickUpItem(whoPicks, pickedWeapon) {
    whoPicks.inventory.push(pickedWeapon);
};

function equipWeapon(whomEquip) {
    if (!whomEquip.weapon && whomEquip.inventory.lenght > 0) {
        whomEquip.weapon.type = whomEquip.inventory[0].type;
        whomEquip.weapon.damage += whomEquip.inventory[0].damage;
    }
    console.log(whomEquip.inventory);
    console.log(whomEquip.weapon);
};

// showing you what I have

function displayStats(object){
    const statsDisplay = document.createElement('p');
    const imgContainer = document.getElementById('imgContainer');
    statsDisplay.setAttribute('id', 'statsDisplay');
    statsDisplay.innerText = `${object.name} has ${object.health} health and currently carries ${object.weapon.type} with ${object.weapon.damage} damage.`;
    imgContainer.appendChild(statsDisplay);
}


function changeName(object){
    event.preventDefault();
    const inputField = document.getElementById('name');
    const newName = inputField.value;
    object.name = newName;
    displayStats(object);
}
