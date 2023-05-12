let displayWidth = 640;
let displayHeight = 480;

let config = {
    type: Phaser.AUTO,
    width: displayWidth,
    height: displayHeight,
    backgroundColor: '#000000',
    scene: [Scene1, Scene2, Startmenu, Pause],
    pixelArt: true,
    physics: 
    {
        default: "arcade",
        arcade:
        {
            debug: false
        }
    },
};

game = new Phaser.Game(config);