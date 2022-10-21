let paramArr = window.location.search
    .split(/([^?&][a-zA-Z0-9]*)=([a-zA-Z0-9@.]*)/gm)
    .map(x => (x === "&" || x === "?") ? "" : x)
    .filter(x => x !== "")

let param = {}

paramArr.forEach((x, i, arr) => {
    if (i % 2 === 1) return;

    param[x] = arr[i + 1]
})

console.log(param);

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
document.querySelector('#numberpa').textContent = `${param.manyp}`;
document.querySelector('#weeknumber').textContent = `${param.manyw}`;
document.querySelector('#totalprice').textContent = `${place[param.id].price * param.manyp} €`;
document.querySelector('#voyagename').textContent = `Récapitulatif de votre reservation pour ${place[param.id].name}`;

console.log(place[param.id]);