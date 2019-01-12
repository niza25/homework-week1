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

