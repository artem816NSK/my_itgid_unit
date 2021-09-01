class Goods {
    constructor(name, amount, image, count){
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }

    draw(out, cls){
        let imageDiv = document.createElement('div');
        
        imageDiv.classList.add(cls);
        
        document.querySelector(out).append(imageDiv);

        imageDiv = document.querySelector(`.${cls}`).innerHTML = `<img src=${this.image}> <br>
                                                                    Name = ${this.name} Count = ${this.count}`;
    }
}