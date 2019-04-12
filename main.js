const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: true,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: true,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

const foods = [hamburger, zucchini, chickenBreast, corn, steak];
const cookedFood = [];

function grill(foodarray) {
    for (let i = 0; i < foodarray.length; i++) {
        if (foodarray[i].cooked === true) {
            cookedFood.push(foodarray[i]);
        }
    }
}

grill(foods);
console.log("all food", foods);
console.log("cooked food", cookedFood);