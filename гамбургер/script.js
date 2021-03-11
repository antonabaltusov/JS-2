/* Некая сеть фастфуда предлагает несколько видов гамбургеров:
Маленький (50 рублей, 20 калорий).
Большой (100 рублей, 40 калорий).
Гамбургер может быть с одним из нескольких видов начинок (обязательно):
С сыром (+10 рублей, +20 калорий).
С салатом (+20 рублей, +5 калорий).
С картофелем (+15 рублей, +10 калорий).
Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). 
Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса 
со следующей страницы, но можно использовать и свою.*/
class Api {
    constructor() {

    }

    fetchSize() {
        return [
            { title: 'big', price: 100, calories: 40 },
            { title: 'smoll', price: 50, calories: 20 },
        ];
    }

    fetchStuffing() {
        return [
            { title: 'cheese', price: 10, calories: 20 },
            { title: 'salat', price: 20, calories: 5 },
            { title: 'potato', price: 15, calories: 10 },
        ];
    }

    fetchToppings() {
        return [
            { title: 'приправа', price: 15, calories: 0 },
            { title: 'майонез', price: 20, calories: 5 },
        ];
    }
}
class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }
    fetchSizeHamburger() {

    }
    addTopping(topping) {
        this.topping.push(topping);
        return this;
    }
    removeTopping(topping) {
        delete this.topping[topping];
        return this;
    }
    getToppings(topping) {   // Получить список добавок }
        getSize() {
            this.goods = this.api.fetch().map(({ title, price, img }) => new GoodsItem(title, price, img));
        }
        getStuffing() {          // Узнать начинку гамбургера }
            calculatePrice() {       // Узнать цену }
                calculateCalories() {    // Узнать калорийность }
                }

                class ProductBuilder {
                    constructor() {
                        this.name = 'A Product';
                        this.price = 9.99;
                        this.category = 'other';
                    }

                    withName(name) {
                        this.name = name;
                        return this;
                    }

                    withPrice(price) {
                        this.price = price;
                        return this;
                    }

                    withCategory(category) {
                        this.category = category;
                        return this;
                    }

                    build() {
                        return {
                            name: this.name,
                            price: this.price,
                            category: this.category,
                        }
                    }
                }

                console.log(
                    new ProductBuilder()
                        .withName('Harry Potter')
                        .withCategory('book')
                        .build()
                )