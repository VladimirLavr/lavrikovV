class TodoList {
    constructor() {
        this.items = [];
    }
    add(id, title, desc, done) {
        this.items.push(new TodoItem(id, title, desc, done));
}
    completeAll() {
        this.items.forEach(item => {
            if (item.done === false)
                return item.done = true;
        })
    }
};


class TodoItem {
    constructor(id, title, desc, done) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.done = done;
    }
};

const result = new TodoList();

result.add(20, 'Понедельник', 'Сходить в магазин', false);
result.add(14, 'Вторник', "Сходить в бассейн", true);
result.add(33, 'Среда', "Сходить к репетитору", false);

result.completeAll();

console.log(result.items);








