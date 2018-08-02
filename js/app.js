"use strict";

/**
//TODO: Add number of hits
//TODO: Add levels -- bugs get faster as level increases
//TODO: Add new set of bugs to loop
//TODO: Add jewels
//TODO: Rodrick Bloomfield's walk-through used Entity class. Implement that idea.
//TODO: Make game responsive and available on mobile devices
//TODO: **Make game accessible**
*/

//ENEMY CLASS
/*
 * constructor initializes variables for enemy image, location, and speed
 */
 
class Enemy {
    constructor(x, y, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    /*
     * function for establishing speed of bugs
     * function keeps bugs just off screen when starting and ending loop
     */
    update(dt) {
        if (this.x >= -150 && this.x < 500) {
            this.x += this.speed * dt;
        } else(this.x = -150);
    }
}

//PLAYER CLASS
/*
 * constructor initializes variables for player image, location, and speed
 */
class Player {
    constructor() {
        this.sprite = 'images/char-cat-girl.png';
        this.x = 200;
        this.y = 420;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    /*
    * function that detects player and enemy collisions
    * when the player colides with (is within x and y range of) bug,
    player returns to starting position.
    */
    update() {
        for (let enemy of allEnemies) {
            if ((enemy.x >= this.x - 75) && (enemy.x <= this.x + 75)) {
                if ((enemy.y >= this.y - 45) && (enemy.y <= this.y + 55)) {
                    this.x = 200;
                    this.y = 420;
                }
            }
        }
        /*
        * function calls reset() when the player reaches the water
        * when player reacher the water, player is repositioned in order to prevent
        repeated calls of reset()
        * reset() stops bug movement and calls displayModal()
        */
        if (this.y === 0) {
            this.y = 0.5;
            return reset();
        }
    }

    //PLAYER MOVEMENT
    /*
     * use keyboard arrows to move
     * includes character boundaries, so that character can not be moved off screen
     */
    handleInput(input) {
        if (input == 'left' && this.x >= 0) {
            this.x = this.x + -30; //70
        } else if (input == 'right' && this.x <= 400) {
            this.x = this.x + 30;
        } else if (input == 'up' && this.y > 0.5) {
            this.y = this.y + -30;
        } else if (input == 'down' && this.y < 420) {
            this.y = this.y + 30;
        }
    }
}
//
/*
 * player variable
 * bug variables with parameters of x, y, speed
 * allEnemies array with three bugs pushed into it
 *
 */
const player = new Player();
const bug1 = new Enemy(-135, 70, 200);
const bug2 = new Enemy(-150, 150, 40);
const bug3 = new Enemy(-100, 235, 100);
const allEnemies = [];
allEnemies.push(bug1);
allEnemies.push(bug2);
allEnemies.push(bug3);

/*
 * this listens for key presses and sends the keys to the
 player.handleInput() method
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
  * NOTE: when attempting to use // yesButton.addEventListener("click", function(){}) // the console
registered 4 clicks
  * NOTE: Using $('.yes') with the above, resulted in an error
*/
function modalClick() {
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');

    yesButton.onclick = function() {
        location.reload();
    };

    noButton.onclick = function() {
        displayModal();
    };

}

//END OF GAME FUNCTION
/*
 * bugs stop moving, modal appears
 */
function reset() {
    allEnemies.forEach(function(enemy) {
        enemy.speed = 0;
        displayModal();
    });
}

//TOGGLES MODAL TO "DISPLAY: NONE" TO START THE GAME
displayModal();
