class Startmenu extends Phaser.Scene
{
    constructor()
    {
        super("menu");
    }


    create()
    {
        this.add.text(20, 20, "loading game...");
        this.scene.start("pause");
    }

}
