let cardArray = [ 
    { name: "fries", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/fries_t5rfhy.png", }, 
    { name: "fries", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/fries_t5rfhy.png", },
    { name: "pizza", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/pizza_bmge3a.png", },
    { name: "pizza", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/pizza_bmge3a.png", }, 
    { name: "milkshake", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/milkshake_emts11.png", },
    { name: "milkshake", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/milkshake_emts11.png", }, 
    { name: "ice-cream", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/ice-cream_olhaql.png", },
    { name: "ice-cream", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/ice-cream_olhaql.png", },
    { name: "hotdog", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/hotdog_ng2hna.png", },
    { name: "hotdog", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/hotdog_ng2hna.png", },
    { name: "cheeseburger", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/cheeseburger_ju7b3t.png", },
    { name: "cheeseburger", img: "https://res.cloudinary.com/fakod29/image/upload/v1604561421/cheeseburger_ju7b3t.png", }, 
    ]; 
    
    let grid = document.querySelector(".grid");
    let audio = document.querySelector("audio")
    let source = document.querySelector("#source")
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let popup = document.querySelector(".popup"); 
    let playAgain = document.querySelector(".playAgain"); 
    let clickBoard = document.querySelector(".clickBoard"); 
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;
    document.addEventListener("DOMContentLoaded", function () {
    
    createBoard(grid, cardArray); 
    arrangeCard();
    playAgain.addEventListener("click", replay); 
    
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)
    ) 
    });
    
    function createBoard(grid, array) { 
    popup.style.display = "none"; 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "card.jpg");
    img.setAttribute("data-id", index); 
    grid.appendChild(img); 
    })
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
    cardArray.sort(() => 0.5 - Math.random())
    }
    
    // flip Card function
    
    function flipCard() { 
    let selected = this.dataset.id;
      let clicked =cardArray[selected].name
    cardsSelected.push(clicked); 
      
       source.src=`${clicked}.mp3`
      audio.load()
      audio.play()
      
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 500);
    } 
    }

    
    function checkForMatch() { 
    let imgs = document.querySelectorAll("img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
    alert("you have found a match"); 
     
    cardsWon += 1; 
    scoreBoard.innerHTML = cardsWon; 
    setTimeout(checkWon,500) 
    } else { 
    imgs[firstCard].setAttribute("src", "card.jpg");
    imgs[secondCard].setAttribute("src", "card.jpg"); 
    alert("wrong, please try again"); 
      source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/error.mp3"
      audio.load()
      audio.play()
      imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
    }
    
    function checkWon() {
    if (cardsWon == cardArray.length / 2) {
    alert("You won") 
    setTimeout(()=> popup.style.display = "flex" ,300); 
    }
    }
    
    function replay() { 
    arrangeCard(); 
    grid.innerHTML = "";
    createBoard(grid, cardArray);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
    popup.style.display = "none"; 
    }