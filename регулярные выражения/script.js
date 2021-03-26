text = "Lorem 'ipsum dolor sit amet' consectetur adipisicing elit. Eos, suscipit facilis 'rerum eiusmaiores nesciunt voluptate' facere quod velit labore possimus qui sequi. Quos iste aliquid, voluptatem dictaad repudiandae? aren't";
var regexp = /'([A-Za-z ]*)'/ig;
text = text.replace(regexp, "“$1”");
console.log(text);
{/* <input id="name">имя
        <input id="family">фамилия
        <input id="E-mail">E-mail
        <input id="txt">текст */}
$name = document.querySelector('#name');
$fhone = document.querySelector('#fhone');
$Email = document.querySelector('#E-mail');
$txt = document.querySelector('#txt');
data = []
console.log($name.value)
function checkin(text, right) {
    let regexp = new RegExp(right);
    //var regexp = right;
    str = text
    if (regexp.test(str)) {
        return 1
    } return 0
}
function checkout() {
    var data = [[$name, '^[a-zA-Zа-яА-Я]+$'],
    [$fhone, '^[a-zA-Zа-яА-Я]+$'],
    [$Email, '[A-Z0-9._%+-]+@mail.ru'],
    [$txt, '.+']
    ];
    for (let i = 0; i < data.length; i++) {
        console.log(data[i][0], data[i][1])
        if (!checkin(data[i][0].value, data[i][1])) {
            data[i][0].style.border = '1px solid red';
            data[i][0].insertAdjacentHTML('afterend', 'неправильный формат');
        } else {
            data[i][0].style.border = '1px solid green';

        }
    }

}
