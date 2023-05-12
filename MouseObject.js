class Mouse extends Phaser.GameObjects.Sprite
{
    constructor(scene)
    {
        let x = 3;
        let y = 8;
        super(scene, x*32, y*32, "mouse");
        this.total = 0;
        scene.children.add(this);
        scene.add.existing(this);
    }

    eat()
    {
        this.total++;
    }

}