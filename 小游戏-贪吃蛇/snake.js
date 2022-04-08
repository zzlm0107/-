//蛇类
class Snake {
    constructor({width=20,height=20,direction='right'} = {}) {
        //数据初始化
        this.elements = [];
        this.width = width;
        this.height = height;
        this.direction = direction;

        //蛇身
        this.body = [
            { x: 3, y: 2, color: 'red'},
            { x: 2, y: 2, color: 'skyblue'},
            { x: 1, y: 2, color: 'skyblue'}
        ]
    }

    //移动
    move(food, map){
        for(let i = this.body.length - 1; i > 0 ; i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }

        let head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
            default:
                break;
        }

        let headX = head.x * this.width;
        let headY = head.y * this.height;
        if (headX === food.x && headY === food.y) {
            let last = this.body[this.body.length - 1];
            this.body.push({
                x:last.x,
                y:last.y,
                color:last.color
            })
            //生成食物
            food.render(map);
        }
    }

    //
    render(map){
        this.remove();
        for(let i = 0,len = this.body.length; i < len; i++){
            let object = this.body[i];
            let div = document.createElement('div');

            //设置div的样式
            div.style.position = 'absolute';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;

            map.appendChild(div);
            this.elements.push(div);
        }
    }

    //移除食物
    remove() {
        for (let i = this.elements.length - 1; i >= 0; i--){
            //删除真实dom
            this.elements[i].parentNode.removeChild(this.elements[i]);
            //删除数组元素
            this.elements.pop();
        }
    }
}

export default Snake;