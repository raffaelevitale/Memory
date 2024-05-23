window.onload = init;

function init() {
    let carte = [{nome: 'a73', img: 'img/ILCE-7RM3A.jpg'}, {nome: 'a75', img: 'img/ILCE-7RM5.jpg'}, {
        nome: 'fx3',
        img: 'img/ILME-FX3.jpg'
    }, {nome: 'iphone', img: 'img/IPHONE-15-PRO-MAX.jpg'}, {nome: 'q3', img: 'img/LEICA-Q3.jpg'}, {
        nome: 'sl3',
        img: 'img/LEICA-SL3.jpg'
    },];

  let mazzo = carte.concat(carte);

    mazzo.sort(() => 0.5 - Math.random());  //funzione che serve a mescolare le carte prima di stamparle

    let griglia = document.querySelector('.griglia');
    let displayRisultato = document.querySelector('#risultato');
    let carteScelte = [];
    let carteScelteId = [];
    let carteVinte = [];

    function creaGriglia() {
        for (let i = 0; i < mazzo.length; i++) {
            let carta = document.createElement('img');
            carta.setAttribute('src', 'img/back.png');
            carta.onclick = function () {
                giraCarta(i);
            };
            griglia.appendChild(carta);
        }
    }

    function controllaMatch() {
        let carte = document.querySelectorAll('img');
        let idCarta1 = carteScelteId[0];
        let idCarta2 = carteScelteId[1];

        if (idCarta1 === idCarta2) {
            alert('Hai selezionato la stessa carta!');
        } else if (carteScelte[0] === carteScelte[1]) {
            alert('Hai trovato una coppia!');
            carte[idCarta1].setAttribute('src', 'img/white.png');
            carte[idCarta2].setAttribute('src', 'img/white.png');
            carte[idCarta1].onclick = null;
            carte[idCarta2].onclick = null;
            carteVinte.push(carteScelte);
        } else {
            alert('Spiacente, prova ancora!');
            carte[idCarta1].setAttribute('src', 'img/back.png');
            carte[idCarta2].setAttribute('src', 'img/back.png');
        }
        carteScelte = [];
        carteScelteId = [];
        displayRisultato.textContent = carteVinte.length;
        if (carteVinte.length === mazzo.length / 2) {
            displayRisultato.textContent = 'Complimenti! Hai trovato tutte le coppie!';
        }
    }

    function giraCarta(index) {
        let carta = mazzo[index];
        carteScelte.push(carta.nome);
        carteScelteId.push(index);
        let img = document.querySelectorAll('img')[index];
        img.setAttribute('src', carta.img);
        if (carteScelte.length === 2) {
            setTimeout(controllaMatch, 500);
        }
    }

    creaGriglia();
}