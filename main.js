document.addEventListener('DOMContentLoaded', () => {
    // Add cards to play with
    const cardsArray = [
        {
            name: "sofi-1",
            img: "images/sofi-1.jpg"
        },
        {
            name: "sofi-1",
            img: "images/sofi-1.jpg"
        },
        {
            name: "sofi-2",
            img: "images/sofi-2.jpg"
        },
        {
            name: "sofi-2",
            img: "images/sofi-2.jpg"
        },
        {
            name: "sofi-3",
            img: "images/sofi-3.jpg"
        },
        {
            name: "sofi-3",
            img: "images/sofi-3.jpg"
        }
    ]

    let result = document.querySelector('#result')
    const grid = document.querySelector('.grid');
    let cardsChosen = [];
    let cardsIdChosen = [];
    let cardsWon = 0;

    function createBoard() {
        for (let i = 0; i < cardsArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i.toString());
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // Flip
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId]);
        cardsIdChosen.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img)
        if (cardsIdChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    // Check matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        if (cardsChosen[0].name === cardsChosen[1].name) {
            alert('MATCH');
            cards[cardsIdChosen[0]].setAttribute('src', 'images/white.png');
            cards[cardsIdChosen[1]].setAttribute('src', 'images/white.png');
            cardsWon++;
        } else {
            alert('WRONG');
            cards[cardsIdChosen[0]].setAttribute('src', 'images/blank.png');
            cards[cardsIdChosen[1]].setAttribute('src', 'images/blank.png');
        }
        cardsChosen = [];
        cardsIdChosen = [];
        result.textContent = cardsWon.toString();
        if (cardsWon === cardsArray.length / 2) {
            alert('CONGRATULATIONS YOU WON!!');
        }
    }


    createBoard();


});