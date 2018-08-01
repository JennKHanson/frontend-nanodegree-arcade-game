
/*
TODO: Add number of hits
TODO: Add levels -- bugs get faster as level increases
TODO: Add new set of bugs to loop
TODO: Add jewels
TODO: walkthrough used Entity Class that
*/

class Enemy {
  constructor(x, y, speed){
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  update(dt) {
    if (this.x >= -150 && this.x < 500) {
      this.x += this.speed * dt;
    }
    else (this.x = -150);
  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

class Player {
  constructor(){
    this.sprite = 'images/char-cat-girl.png';
    this.x = 200;
    this.y = 420;
  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

  update(){
    for (let enemy of allEnemies) {
        if ((enemy.x >= player.x - 75) && (enemy.x <= player.x + 75)){
            if ((enemy.y >= player.y - 45) && (enemy.y <= player.y + 55)){
      player.x = 200; player.y = 420;
    }
  }
    }
    if (player.y === 0) {
      player.y = .5;
      return reset();
    }
}

//PLAYER MOVEMENT
/*
Use keyboard arrows to move
Includes character boundaries
*/
  handleInput(input){
    if (input == 'left' && this.x >= 0) {
      this.x = this.x +- 30; //70
    }
    else if (input == 'right' && this.x <= 400) {
      this.x = this.x + 30;
    }
    else if (input == 'up' && this.y > .5) {
      this.y = this.y +- 30;
    }
    else if (input == 'down' && this.y < 420) {
      this.y = this.y + 30;
        }
  }
}

const player = new Player();
const bug1 = new Enemy(-135, 70, 200);
const bug2 = new Enemy(-150, 150, 40);
const bug3 = new Enemy(-100, 235, 100);
const allEnemies = [];
allEnemies.push(bug1);
allEnemies.push(bug2);
allEnemies.push(bug3);

/*
This listens for key presses and sends the keys to the
Player.handleInput() method.
*/
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//MODAL DISPLAY FUNCTION
function displayModal() {
    const modalShow = document.querySelector('.modal');
    const modalBoxShow = document.querySelector('.modal-box');
    modalShow.classList.toggle('modal-display');
    modalBoxShow.classList.toggle('modal-display');
    modalClick();
}

//MODAL CLICK EVENTS
/*
NOTE: when attempting to use // yesButton.addEventListener("click", function(){}) // the console
registered 4 clicks
NOTE: Using $('.yes') with the above, resulted in an error
*/
function modalClick() {
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');

    yesButton.onclick = function() {
        location.reload(); // is the cheater function :)
    };

    noButton.onclick = function() {
        displayModal();
    };

}

//END OF GAME FUNCTION
/*
bugs stop, modal appears
*/
function reset() {
  allEnemies.forEach(function(enemy){
  enemy.speed = 0;
  displayModal();
});}

//TOGGLES MODAL TO "DISPLAY: NONE" TO START THE GAME
displayModal();
