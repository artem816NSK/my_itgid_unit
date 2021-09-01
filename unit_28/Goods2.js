class Goods2 extends Goods {
    constructor(name, amount, image, count, sale){
        super(name, amount, image, count);
        this.sale = sale;
    }

    draw(out, cls){
        let imageDiv = document.createElement('div');
        
        imageDiv.classList.add(cls);
        
        document.querySelector(out).append(imageDiv);

        imageDiv = document.querySelector(`.${cls}`).innerHTML = `<img src=${this.image}> <br>
                                                                    Name = ${this.name} Count = ${this.count} <br>
                                                                    Sale = ${this.sale}`;
    }
}
