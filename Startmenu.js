class Startmenu extends Phaser.Scene
{
    constructor()
    {
        super("menu");
    }

    create()
    {
        this.background = this.add.image(0, 0, "backgroundMenu");
        this.background.setOrigin(0, 0);

        this.btnStart = new Button(320, 120, 'PLAY', this, () => this.scene.start('playGame'));
        this.btnSetting = new Button(320, 240, 'SETTINGS', this, () => this.scene.start('settings'));
        this.btnQuit = new Button(320, 360, 'QUIT', this, () => window.location.href= "SnakeGame.html");
    }

}
