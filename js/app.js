
class Enemy {
  constructor(x, y){
    this.sprite = 'images/enemy-bug.png';
    this.x = -150; //-150
    this.y = 60; // 60
  }
  update(dt) {
    if (this.x >= -150 && this.x < 500) {
      this.x += 100 * dt;
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
    this.y = 420; //420
  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

/*
  update(dt) {
    this.isOutOfBoundsX = this.x > 410;
    this.isOutOfBoundsY = this.y < 1;
  }*/

//character movement with arrows and character boundaries
  handleInput(input){
    if (input == 'left' && this.x >= 0) {
      this.x = this.x +- 70;
    }
    else if (input == 'right' && this.x <= 400) {
      this.x = this.x + 70;
    }
    else if (input == 'up' && this.y > 0) {
      this.y = this.y +- 70;
    }
    else if (input == 'down' && this.y < 420) {
      this.y = this.y + 70;
        }
  }
}

const player = new Player();
const bug1 = new Enemy();
const bug2 = new Enemy(-50, 50);
const bug3 = new Enemy();
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
