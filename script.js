// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров.
// Продумайте, какие методы понадобятся для работы с этими сущностями.
class ApiMock {
    constructor() {

    }

    fetch() {
        return [
            { title: 'Shirt', price: 150, img: "img / 1.png" },
            { title: 'Socks', price: 50, img: "img / 1.png" },
            { title: 'Jacket', price: 350, img: "img / 1.png" },
            { title: 'Shoes', price: 250, img: "img / 1.png" },
        ];
    }
}

class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
    }

    getHtml() {
        return `<div class="goods-item">
      <img class="photo" src="${this.img}" alt="фото товара">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
      <button class="add-button" type="button">Добавить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.api = new ApiMock();
        this.$goodsList = document.querySelector('.goods-list');
        this.goods = [];
    }

    fetchGoods() {
        this.goods = this.api.fetch().map(({ title, price, img }) => new GoodsItem(title, price, img));
    }

    render() {
        this.$goodsList.textContent = '';
        this.goods.forEach((good) => {
            this.$goodsList.insertAdjacentHTML('beforeend', good.getHtml());
        })
    }
    getSumm() {
        let summ = 0;
        this.goods.forEach(good => {
            summ += good.price;
        });
        //console.log(summ)
        return summ

    }
}
class GoodsOfCard extends GoodsItem {
    constructor(title, price, img) {
        super(title, price, img);
        this.count = 0;
    }
    //метод длобваления в корзину(когда человек кликает на кнопку Добавить)
    //методы изменения количества товара в корзине(на +1 или -1 или вообще что бы человек мог вводить количество)
    //метод удаления товара из корзины
    //метод вывода общей стомости 

}
class GoodsListOfCard {
    //метод вывода на экран когда человек кликнет по кнопке
    //метод подсчета суммы заказа
}


const goodsList = new GoodsList();

goodsList.fetchGoods();
goodsList.render();
console.log(goodsList.getSumm())