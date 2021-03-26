
class Api {
    constructor() {
        this.url = '/goods.json';
    }

    fetch(error, success) {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(JSON.parse(xhr.responseText));
                } else if (xhr.status > 400) {
                    error('все пропало');
                }
            }
        }

        xhr.open('GET', this.url, true);
        xhr.send();
    }



    fetchPromise() {
        return new Promise((resolve, reject) => {
            this.fetch(reject, resolve)
        })
    }
}

class Header {
    constructor() {
        this.$container = document.querySelector('header');
        this.$button = this.$container.querySelector('.cart-button');
        this.$search = this.$container.querySelector('#search');
        this.$goodsList = document.querySelector('.goods-list');
        this.$cart = document.querySelector('.cart');
        this.$cart.style.display = "block";
    }

    setSearchHandler(callback) {
        this.$search.addEventListener('input', callback);
    }

    setButtonHandler(callback) {
        this.$button.addEventListener('click', callback);
    }
    setAddProduct(callback) {
        this.$goodsList.addEventListener('click', callback);
    }
}

class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;


    }
    getHtml(index) {

        return `<div class="goods-item">
      <img class="photo" src="${this.img}" alt="фото товара">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
      <button class='add-button' onclick="goodsList.addToCatd(${index})" type='button'>Добавить</button>
      </div>`;
    }

}
class GoodsItemCart {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
    }
    getHtml(index) {

        return `<div class="goods-item">
      <img class="photo" src="${this.img}" alt="фото товара">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
      <button class='add-button' onclick="goodsList.cart.removeGood(${index})" type='button'>Удалить</button>
      </div>`;
    }

}
class Cart {
    constructor() {
        this.goods = [];
        this.header = new Header;
        // this.header.setButtonHandler(console.log("hello"));
    }
    add(good) {
        this.goods.push(new GoodsItemCart(good.title, good.price));
        console.log(this.goods);
        this.render();
    }
    removeGood(index) {
        this.goods.splice(index, 1);
        this.render();
        console.log(index)
    }
    showCart() {
        if (this.header.$cart.style.display === "block") {
            this.header.$cart.style.display = "none"
        } else { this.header.$cart.style.display = "block" }
    }

    render() {
        this.header.$cart.textContent = '';
        this.goods.forEach((good, index) => {
            this.header.$cart.insertAdjacentHTML('beforeend', good.getHtml(index));
        })
    }
}

class GoodsList {
    constructor() {
        this.api = new Api();
        this.header = new Header();
        this.cart = new Cart();
        this.goods = [];
        this.filteredGoods = [];

        //this.api.fetch(this.onFetchError.bind(this), this.onFetchSuccess.bind(this));

        this.header.setSearchHandler((evet) => {
            this.search(evet.target.value);
        })

        const fetch = this.api.fetchPromise();

        fetch.then((data) => { this.onFetchSuccess(data) })
            .catch((err) => { this.onFetchError(err) });

        console.log(fetch);


    }

    addToCatd(index) {
        this.cart.add(this.filteredGoods[index]);
    }

    search(str) {
        if (str === '') {
            this.filteredGoods = this.goods;
        }
        const regexp = new RegExp(str, 'gi');
        this.filteredGoods = this.goods.filter((good) => regexp.test(good.title));
        this.render();
    }

    onFetchSuccess(data) {
        this.goods = data.map(({ title, price, img }) => new GoodsItem(title, price, img));
        this.filteredGoods = this.goods;
        this.render();
    }

    onFetchError(err) {
        this.header.$goodsList.insertAdjacentHTML('beforeend', `<h3>${err}</h3>`);
    }

    render() {
        this.header.$goodsList.textContent = '';
        this.filteredGoods.forEach((good, index) => {
            this.header.$goodsList.insertAdjacentHTML('beforeend', good.getHtml(index));
        })
    }
    getSumm() {
        let summ = 0;
        this.goods.forEach(good => {
            summ += good.price;
        });
        return summ
    }
}

function openCart() {
    console.log('cart');
};


const goodsList = new GoodsList();
//

