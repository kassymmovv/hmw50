class Product{
    constructor(name, coll){
        this.title = name;
        this.colories = coll;
    }

}

class Dish{
    constructor(nameProduct){
        this.name = nameProduct;
        this.product = [];
    }

    addProduct(ing ,weight){
        this.product.push({...ing,weight:weight})
    }
    getDishCol(){
        console.log(this.product);
        let col = 0;
        for (const key of this.product){
            const a = key.colories / 100;
            const b = a * key.weight;
            console.log();
        }
        return col;
    }
}

class calculator {
    constructor(){
        this.dish = [];
    }
    addDish(dish){
        this.dish.push(dish);

    }
    getTotalCalories(){
        let Bank = 0;
        this.dish[0].product.forEach(Dish => {
            Bank += Dish.getDishCol();
        });
        return Bank
    }
    getAllDishesInfo(){

    }
}

const meat = new Product('Филе говядина', 158);

const rice = new Product('Рис', 130);

const onion = new Product('Лук', 40);

const carrot = new Product('Морковь', 41);

const plov = new Dish('Плов');

plov.addProduct(meat, 100);

plov.addProduct(rice, 150);

plov.addProduct(onion, 25);

plov.addProduct(carrot, 25);
plov.getDishCol();
const calculate = new calculator();

calculate.addDish(plov);

const calories = calculate.getTotalCalories();

console.log(calories); // должно вывести 373.25



const totals = calculate.getAllDishesInfo();

console.log(totals);