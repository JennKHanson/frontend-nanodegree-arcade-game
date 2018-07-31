
class Enemy {
  constructor(){
    this.sprite = 'images/enemy-bug.png';
    this.x = 50;
    this.y = 1;
  }
  update(dt) {
    //{this.x = x};
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
  
outofBounds(){
  if (this.x = -10) {
    this.x = -10;
  }
  else if (this.x = 410) {
    this.x = 410;
  }

}


  handleInput(input){
    if (input == 'left') {
      this.x = this.x +- 70;
    }
    else if (input == 'right') {
      this.x = this.x + 70;
    }
    else if (input == 'up') {
      this.y = this.y +- 70;
    }
    else if (input == 'down') {
      this.y = this.y + 70;
        }
  }
}

const player = new Player();
const bug1 = new Enemy();
const bug2 = new Enemy();
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
