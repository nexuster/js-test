var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    parent: 'game'
};

var game = new Phaser.Game(config);

function preload () {
    console.log('Preloading assets...');
    this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
}

function create () {
    console.log('Creating scene...');
    this.add.image(400, 300, 'sky');
}

function update () {
    console.log('Updating scene...');
}