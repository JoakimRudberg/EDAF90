'use strict';
const imported = require('./inventory.js');
/*
console.log(imported.inventory['Sallad']);
console.log(imported.inventory['Krutonger']);
*/
const menu = imported.inventory;
let foods = Object.keys(menu);

/* Uppgift 4 */

let foundations = foods.filter(isFoundation);
let extras = foods.filter(isExtra);
let proteins = foods.filter(isProtein);
let dressings = foods.filter(isDressing);

function isFoundation(value){
    return menu[value].foundation;
}

function isExtra(value){
    return menu[value].extra;
}

function isProtein(value){
    return menu[value].protein;
}

function isDressing(value){
    return menu[value].dressing;
}
/*

console.log("Foundations: " + foundations);
console.log("Extras: " + extras);
console.log("Proteins: " + proteins);
console.log("Dressings: " + dressings);

/* Uppgift 5 */

class Salad {
    constructor() {
        this.ingredients = {
        foundation: [],
        protein: [],
        extra: [],
        dressing: []
        }
      }

    add(ingredient){
        if (ingredient.foundation){
            this.ingredients.foundation.push(ingredient);
        }
        if (ingredient.protein){
            this.ingredients.protein.push(ingredient);
        }
        if (ingredient.extra){
            this.ingredients.extra.push(ingredient);
        }
        if (ingredient.dressing){
            this.ingredients.dressing.push(ingredient);
        }

    }
    remove(ingredient){
        if (ingredient.foundation){
            this.ingredients.foundation = [];
        }
        if (ingredient.protein){
            this.ingredients.protein = [];
        }
        if (ingredient.extra){
            this.ingredients.extra = [];
        }
        if (ingredient.dressing){
            this.ingredients.dressing = [];
        }   
    }

    /* Uppgift 7 */
    price (){
        let allIngredientPrices = Object.values(this.ingredients).reduce((acc, curr) => {
            return acc.concat(curr);
        }, []);
        let totalPrice = allIngredientPrices.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0);
        console.log("Total price: " + totalPrice);
    }
}

/* Uppgift 6 */
/*
let myCeasarSalad = new Salad();
myCeasarSalad.add(menu.Sallad);
myCeasarSalad.add(menu.Kycklingfilé);
myCeasarSalad.add(menu.Krutonger);
myCeasarSalad.add(menu.Rödlök);
myCeasarSalad.add(menu.Tomat);
myCeasarSalad.add(menu.Ceasardressing);
myCeasarSalad.remove(menu.Ceasardressing);
console.log(myCeasarSalad.ingredients);

myCeasarSalad.price();

/* Uppgift 7 */



/* Uppgift 8 */

class ExtraGreenSalad extends Salad{
    constructor(){
        super();
    }
    price() {
        let allIngredientPrices = Object.values(this.ingredients).reduce((acc, curr) => {
            return acc.concat(curr);
        }, []);
        let totalPrice = allIngredientPrices.reduce((acc, curr) => {
            return acc + curr.price * (curr.foundation ? 1.3 : 0.5);
        }, 0);
        console.log("Total price: " + totalPrice);
    }
}
/*
let myExtraGreenCeasarSalad = new ExtraGreenSalad;
myExtraGreenCeasarSalad.add(menu.Sallad);
myExtraGreenCeasarSalad.add(menu.Kycklingfilé);
myExtraGreenCeasarSalad.add(menu.Krutonger);
myExtraGreenCeasarSalad.add(menu.Rödlök);
myExtraGreenCeasarSalad.add(menu.Tomat);
myExtraGreenCeasarSalad.add(menu.Ceasardressing);
myExtraGreenCeasarSalad.remove(menu.Ceasardressing);
console.log(myExtraGreenCeasarSalad.ingredients);
myExtraGreenCeasarSalad.price();


/* Uppgift 9 

let mySalad = new ExtraGreenSalad()
console.log(mySalad)
console.log(Object.getPrototypeOf(mySalad))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(mySalad)))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(mySalad))))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(mySalad)))))

/* Uppgift 10 */

class GourmetSalad extends Salad {
    constructor(){
        super();
        this.adjustedPrices = {
            foundationPrice: [],
            proteinPrice: [],
            extraPrice: [],
            dressingPrice: []
            }
    }
    add(ingredient, adjustment){
        if (ingredient.foundation){
            this.ingredients.foundation.push(ingredient);
            this.adjustedPrices.foundationPrice.push(ingredient.price * adjustment);
        }
        if (ingredient.protein){
            this.ingredients.protein.push(ingredient);
            this.adjustedPrices.proteinPrice.push(ingredient.price * adjustment);
        }
        if (ingredient.extra){
            this.ingredients.extra.push(ingredient);
            this.adjustedPrices.extraPrice.push(ingredient.price * adjustment);
        }
        if (ingredient.dressing){
            this.ingredients.dressing.push(ingredient);
            this.adjustedPrices.dressingPrice.push(ingredient.price * adjustment);
        }
        //this.adjustedPrices.push(ingredient.price * adjustment);
    }
    remove(ingredient){
        if (ingredient.foundation){
            this.ingredients.foundation = [];
            this.adjustedPrices.foundationPrice = [];
        }
        if (ingredient.protein){
            this.ingredients.protein = [];
            this.adjustedPrices.proteinPrice = [];
        }
        if (ingredient.extra){
            this.ingredients.extra = [];
            this.adjustedPrices.extraPrice = [];
        }
        if (ingredient.dressing){
            this.ingredients.dressing = [];
            this.adjustedPrices.dressingPrice = [];
        }   
    }

    price (){
        let allAdjustedPrices = Object.values(this.adjustedPrices).reduce((acc, curr) => {
            return acc.concat(curr);
        }, []);

        let totalPrice = allAdjustedPrices.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        console.log("Total price: " + totalPrice);
    }
}

let myGourmetSalad = new GourmetSalad();
myGourmetSalad.add(menu.Sallad, 2.0);
myGourmetSalad.add(menu.Kycklingfilé, 2.0);
myGourmetSalad.add(menu.Krutonger, 1.0);
myGourmetSalad.add(menu.Ceasardressing, 5);
myGourmetSalad.remove(menu.Ceasardressing, 5);
console.log(myGourmetSalad.ingredients);
myGourmetSalad.price();