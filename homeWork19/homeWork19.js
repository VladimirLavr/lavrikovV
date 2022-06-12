const wrapper = document.querySelector('.wrapper');


class ListItem {
    constructor(titleList, author) {
        this.titleList = titleList,
            this.author = author,
            this.maxElements = 5,
            this.list = []
    }


    addItem(id, title, total, unit) {

        if (Object.values({ id, title, total, unit }).some(item => item === undefined)) {

            throw new Error(` Не добавлено. Добавляете пустой обьект`);

        }

        if (total === '') {

            throw new Error(`${title}: ${unit}. - Не добавлено. Отсутсвует количество товара!`);
        }

        if (this.list.length >= this.maxElements) {

            throw new Error(`Нельзя добавить больше ${this.maxElements} товаров`);

        }


        if (!this.list.some(item => item.id === id)) {

            this.list.push(new Item(id, title, total, unit));
        }


    }



    removeItem(id) {

        if (this.list.find(item => item.id === id)) {

            let delItem = this.list.find(item => item.id === id);


            const delBlock = document.createElement('div');

            delBlock.classList.add('list');

            delBlock.style.backgroundColor = '#48769d';

            delBlock.style.borderColor = '#bc3f3f';

            delBlock.textContent = `${delItem.title}: ${delItem.total} ${delItem.unit}. - успешно удалено. id обьекта ${id}`;
            
            wrapper.after(delBlock);

            this.list = this.list.filter(item => item.id !== id);


        } else throw new Error(`Не удалено!. Товар с id обьектом ${id} не найден в списке`);
    }
}



class Item {
    constructor(id, title, total, unit) {
        this.id = id,
            this.title = title,
            this.total = total,
            this.unit = unit
    }
}



let listItem = new ListItem("Владимир", "Продукты");



function result() {

    let err = document.createElement('div');

    try {

        listItem.addItem(1, "Масло", "4", "шт");
        listItem.addItem(2, "Молоко", "3", "литра");
        listItem.addItem(3, "Сметана", "5", "пач");
        listItem.addItem(5, "Кефир", "2", "литра");

        listItem.removeItem(1);

        listItem.addItem(4, "Кефир", "", "литра");

        // listItem.addItem();


    } catch (error) {

        console.log(error);

        err.classList.add('list');

        err.style.backgroundColor = '#c8803d';

        err.style.borderColor = '#bc3f3f';

        err.textContent = error.message;


    } finally {


        listItem.list.forEach(item => {

            let element = document.createElement('div');

            element.classList.add('list');

            wrapper.append(element);

            element.textContent = `${item.title}: ${item.total} ${item.unit}. - успешно добавлено. id обьекта ${item.id}`;

        })

        wrapper.append(err);

        console.log(listItem.list);
    }

}

result();

