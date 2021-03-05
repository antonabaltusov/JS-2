const goods = [
    { title: 'Shirt', price: 150, img: "img / 1.png" },
    { title: 'Socks', price: 50, img: "img / 1.png" },
    { title: 'Jacket', price: 350, img: "img / 1.png" },
    { title: 'Shoes', price: 250, img: "img / 1.png" },
];

const $goodsList = document.querySelector('.goods-list');

const renderGoodsItem = ({ title, price, img }) => {
    return `<div class="goods-item">
    <img class="photo" src="${img}" alt="фото товара">
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="add-button" type="button">Добавить</button></div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join('\n');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();

//деструктуризируем объект в функции renderGoodsItem и 
//теперь при запуске передает обьект массива.
//устанавливаем значение по умолчанию для переменной функции renderGoodsList. 
//что дает нам запустить функцию без аргумента и при этом использовать для других массивов.

//что бы избавиться от запятых между строками, в конце каждой строки добавляем перенос строки join('\n')


