
class Enemy {
  constructor(){
    this.sprite = 'images/enemy-bug.png';
    this.x = x * 101;
    this.y = y * 83;

  }
  //update(dt) {
  //  function time(dt){};
//  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}



class Player {
  constructor(){
    this.sprite = 'images/char-boy.png';
    this.x = 5;
    this.y = 1;
  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(){

}
}

const player = new Player();
const allEnemies = new Enemy();

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
