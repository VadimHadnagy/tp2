let id = window.location.search.split("=")[1];

let place = {
    "boucanier": {
        price: 750,
        name: ' Les Boucanier',
        img: 'caraibes_martinique_boucaniers'
    }, 
    "finohlu": {
        price: 805,
        name: 'Finohlu',
        img: 'maldives_fino'
    },
    "kamarina": {
        price: 510,
        name: 'Kamarina',
        img: 'sicile_kamarina'
    },
    "albion": {
        price: 630,
        name: 'Albion',
        img: 'maurice_albion'
    },
    "kani": {
        price: 798,
        name: 'Kani',
        img: 'maldives_kani'
    },
    "greogolimano": {
        price: 535,
        name: 'Gregolimano',
        img: 'grece_gregolimano'
    }
}

document.querySelector('#imgvoyage').src = `./assets/img/${place[id].img}.jpg`;
document.querySelector('#voyagename').innerHTML = `${place[id].name}`;
document.querySelector('#price').innerHTML = `1 semaine / personne : ${place[id].price}€`;


let mail = document.getElementById('mail');  
let manyweek = document.getElementById('manyweek');
let manypeople = document.getElementById('manypeople');
let btn = document.getElementById('btn');



btn.addEventListener('click', (e)=>{

    console.log(mail.value);
    console.log(manyweek.value);
    console.log(manypeople.value);

    if (manyweek.value === '0' || manypeople.value === '0') {
        console.log('null')
    }

    window.open(`/index4.html?id=${id}&mail=${mail.value}&manyw=${manyweek.value}&manyp=${manypeople.value}`);
})




