class Pause extends Phaser.Scene
{
    constructor()
    {
        super("pause");
    }

    create()
    {
        this.add.text(20, 20, "playing Game");
    }
}

