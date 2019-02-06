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

export default Salad;