//y 50 150 225
class Enemy {
  constructor(x, y, speed){
    this.sprite = 'images/enemy-bug.png';
    this.x = x; // -150
    this.y = y; // 60
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
    this.x = 200; //200
    this.y = 420; //420 280
  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

  update(){
    for (let enemy of allEnemies) {
        if ((enemy.x >= player.x - 75) && (enemy.x <= player.x + 75)){
            if ((enemy.y >= player.y - 45) && (enemy.y <= player.y + 35)){
      player.x = 200; player.y = 420;
    }

  }


    }
    if (player.y < 20) {
      displayModal();
    //alert('Win!');
    }
}
//character movement with arrows and character boundaries
//make into swith statement?
  handleInput(input){
    if (input == 'left' && this.x >= 0) {
      this.x = this.x +- 30; //70
    }
    else if (input == 'right' && this.x <= 400) {
      this.x = this.x + 30;
    }
    else if (input == 'up' && this.y > 0) {
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

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
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
    modalShow.classList.remove('modal-display');
    modalBoxShow.classList.remove('modal-display');
}

//MODAL CLICK EVENTS
function modalClick() {
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');

    yesButton.addEventListener('click', function() {
        //resetAll();
        displayModal();
        //location.reload(); // is the cheater function :)
    });

    noButton.addEventListener('click', function() {
        //location.reload();
        displayModal();
    });
}
displayModal();
