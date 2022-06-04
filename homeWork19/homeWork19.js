class BuyList {
    constructor(titleList, author) {
        this.titleList = titleList,
            this.author = author,
            this.maxElements = 12,
            this.list = []
    }


    addItem(id, title, total, unit) {

        if (this.list.length >= this.maxElements) {

            throw new Error(`Нельзя добавить больше ${this.maxElements} товаров`);

        }
        if (new List(id, title, total, unit).total === '') {

            throw new Error(`${title}: ${unit}. - Не добавлено. Отсутсвует количество товара!`);
        }

        if (Object.values(new List(id, title, total, unit))
            .some(item => item === undefined)) {

            throw new Error(` Не добавлено. Добавляете пустой обьект`);

        } else  this.list.push(new List(id, title, total, unit));
        return this.list
    }



    removeItem(id) {
        if (this.list.find(item => item.id === id)) {
            let delItem = this.list.find(item => item.id === id);

            this.list = this.list.filter(item => item.id !== id);
           
            throw new Error(` ${delItem.title}: ${delItem.total} ${delItem.unit}.- успешно удалено из списка`);
        }
    }
}



class List {
    constructor(id, title, total, unit) {
        this.id = id,
            this.title = title,
            this.total = total,
            this.unit = unit
    }
}



let allBuyList = new BuyList();



function result() {

    const wrapper = document.querySelector('.wrapper');

    try {
        allBuyList.addItem(1, "Масло", "4", "литра");
        allBuyList.addItem(2, "Молоко", "6", "литра");
        allBuyList.addItem(3, "Мука", "8", "шт");
        allBuyList.addItem(4, "Соль", "9", "шт");
    
        allBuyList.removeItem(1);
        // 
        //  allBuyList.addItem();
        //  allBuyList.addItem(7, "Мука", "", "пач");

    } catch (error) {
        console.log(error);

        let element = document.createElement('div');

        element.classList.add('list');

        wrapper.append(element);

        element.style.backgroundColor = '#c8803d';

        element.style.borderColor = '#bc3f3f';

        element.textContent = error.message;

    } finally {
       
        
        allBuyList.list.forEach(item => {

            let element = document.createElement('div');

            element.classList.add('list');

            wrapper.append(element);

            element.textContent = `${item.title}: ${item.total} ${item.unit}. - успешно добавлено. id обьекта ${item.id}`;
        })

        console.log(allBuyList.list);
    }
}


result();





