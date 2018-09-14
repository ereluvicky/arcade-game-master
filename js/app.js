// Enemies our player must avoid
var Enemy = function (positionX, positionY, enemySpeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = positionX;
    this.y = positionY;
    this.enemySpeed = 100 + Math.floor(Math.random() * 100);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + (this.enemySpeed * dt)

    if (this.x > 550) {
        this.x = -100;
        this.enemySpeed = 100 + Math.floor(Math.random() * 100);
    }

    //collision handling
    if (player.x < this.x + 60 && player.x + 37 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {
        alert("Head on Collision! Start again");
        player.resetPlayer()

    };
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 450;

};

Player.prototype.update = function (dt) {
    this.positionX = this.positionX + (this.enemySpeed * dt)

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (key) {
    switch (key) {
        case "left":
            this.x = this.x - 50;
            break;
        case "up":
            this.y = this.y - 50;
            break;
        case "right":
            this.x = this.x + 50;
            break;
        case "down":
            this.y = this.y + 50;
            break;
        default:
            break;
    }

    // Player cannot move off screen
    if (this.y > 450) {
        this.y = 450;
    }

    if (this.x > 420) {
        this.x = 420;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // when player reaches water
    if (this.y < 0) {
        alert("You are a Winner!!! Play again.")
        this.resetPlayer()
    }
}

// method to reset player
Player.prototype.resetPlayer = function () {
    this.x = 200;
    this.y = 450;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//initialize all enemies
var enemyOne = new Enemy(0, 100)
var enemyTwo = new Enemy(0, 200)
var enemyThree = new Enemy(0, 300)
var enemyFour = new Enemy(0, 400)
var allEnemies = [];
allEnemies.push(enemyOne);
allEnemies.push(enemyTwo);
allEnemies.push(enemyThree);
allEnemies.push(enemyFour);

// new player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
