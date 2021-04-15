import { } from './good-item';
import { } from './cart';
import { } from './search';
const vue = new Vue({
  el: "#app",
  data: {
    cart: [],
    goods: [],
    filtredGoods: [],
    search: '',
    isLoaded: false,
  },
  methods: {
    addStats(data) {
      //действие, название товара, время 
      fetch('/stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    },
    addToCartHandler(e) {
      const id = e.target.closest('.goods-item').dataset.id;
      const good = this.goods.find((item) => item.id == id);

      fetch('/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(good)
      });

      this.addStats({
        move: 'add',
        name: good.title,
        time: e.timeStamp
      });

      this.cart.push(good);
    },

    removeFromCartHandler(e) {
      const id = e.target.closest('.cart-item').dataset.id;
      const goodIndex = this.cart.findIndex((item) => item.id == id);
      const good = this.goods.find((item) => item.id == id);

      fetch('/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      });

      this.addStats({
        move: 'remove',
        name: good.title,
        time: e.timeStamp
      });

      this.cart.splice(goodIndex, 1);
    },

    searchHandler(search) {
      if (search === '') {
        this.filtredGoods = this.goods;
      }
      const regexp = new RegExp(search, 'gi');
      this.filtredGoods = this.goods.filter((good) => regexp.test(good.title));
    },

  },
  mounted() {
    fetch('/data')
      .then(response => response.json())
      .then(data => {
        this.goods = data;
        this.filtredGoods = data;

        this.isLoaded = true;
      })
      .catch(err => {
        console.log(err);
      })

    fetch('/cart')
      .then(response => response.json())
      .then(data => {
        this.cart = data;
      })
      .catch(err => {
        console.log(err);
      })
  }
})
