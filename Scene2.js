class Scene2 extends Phaser.Scene
{
    constructor()
    {
        super("playGame");
    }

    create()
    {
        this.backgroundGame = this.add.image(0, 0, "backgroundGame");
        this.backgroundGame.setOrigin(0, 0);

        this.score = this.add.text(16, 16, "score: 0" /*{eventuele styling tussen deze haakjes}*/)
    
        this.snake = this.add.image(50, 30, "snake");
       
        this.mouse = this.add.image(50, 80, "mouse");
        
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    update()
    {
        
        this.moveSnake(this.snake, 3);
        
    }   

        

    moveSnake(snake, speed)
    {
        if(this.cursorKeys.left.isDown)
        {
            this.snake.setVelocityX(-speed);
        };
        snake.y += speed;
        if(snake.y > config.height)
        {
            this.resetSnake(snake);
        };
    }
    
    resetSnake(snake)
    {
        snake.y = 0;
    }
}