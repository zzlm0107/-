import Food from "./food.js"
import Snake from "./snake.js"

//游戏的入口文件
class Game {
    constructor(map) {
        this.food = new Food();
        this.snake = new Snake();

        this.map = map;
        this.timer = null;
    }

    start() {
        this.food.render(this.map);
        this.snake.render(this.map);
        this.runSnake();
        this.bindKey()
    }

    bindKey() {
        document.addEventListener('keydown', event => {
            switch (event.code) {
                case 'ArrowLeft':
                    this.snake.direction = 'left';
                    break;
                case 'ArrowUp':
                    this.snake.direction = 'top';
                    break;
                case 'ArrowRight':
                    this.snake.direction = 'right';
                    break;
                case 'ArrowDown':
                    this.snake.direction = 'bottom';
                    break;
                default:
                    break;
            }            
        })
    }

    runSnake() {
        this.timer = setInterval(()=>{
            this.snake.move(this.food,this.map);
            let maxX = this.map.offsetWidth / this.snake.width;
            let maxY = this.map.offsetHeight / this.snake.height;
            let headX = this.snake.body[0].x;
            let headY = this.snake.body[0].y;

            if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                alert('游戏结束');
                clearInterval(this.timer);
                return 
            }
            this.snake.render(this.map);
        },200)
    }
}

export default Game;