let displayWidth = 640;
let displayHeight = 480;

let config = {
    type: Phaser.AUTO,
    width: displayWidth,
    height: displayHeight,
    backgroundColor: '#000000',
    scene: [Startmenu, Pause]
};

game = new Phaser.Game(config);