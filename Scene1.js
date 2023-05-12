class Scene1 extends Phaser.Scene
{
    constructor()
    {
        super("bootGame");
    }

    preload()
    {
        this.load.image("backgroundGame", "./snake/snakeExample.jpg");
        this.load.image("backgroundMenu", "./snake/snakeImage.jpg")
        this.load.image("snake", "./snake/whitesquare.jpg");
        this.load.image("mouse", "./snake/purplesquare.jpg");
    }


    create()
    {
        this.scene.start("menu");
    }

}