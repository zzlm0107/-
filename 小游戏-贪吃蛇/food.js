import {getRandom} from './utils.js'

//食物类
class Food {

    constructor({x=0,y=0,width=20,height=20,color='green'} = {}) {
        //数据的初始化
        //存储器
        this.elements = [];
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    //渲染函数，生成食物
    render(map) {
        //创建新食物前先删除之前的食物
        this.remove();
        //食物的x，y坐标
        this.x = getRandom(0, map.offsetWidth /this.width - 10 ) * this.width;
        this.y = getRandom(0, map.offsetHeight /this.height - 1 ) * this.height;

        let div = document.createElement('div');
        //设置div的样式
        div.style.position = 'absolute';
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
        
        map.appendChild(div);
        // 存储此食物
        this.elements.push(div);
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

export default Food;