const school = {
    name: 'Online School',
    description: 'Simple online school description',
    maxGroup: 5,
    maxStudent: 15,
    avialableCourse: ["Front-end Pro", "Front-end Basic"],
    inProgressGroups: [],
    __callbacks: {},
    __supportedEvets: { GROUP_STARTED: "GROUP_STARTED", GROUP_ENDED: "GROUP_ENDED" },

    startLearningGroup(courseName, amountOfStudents) {
        if (this.avialableCourse.includes(courseName)) {
            if (amountOfStudents <= this.maxStudent) {
                if (!this.inProgressGroups.some((inProgressGroup) => inProgressGroup.courseName === courseName)) {
                    this.inProgressGroups.push({ courseName, amountOfStudents });
                    this.dispatch(this.__supportedEvets.GROUP_STARTED, courseName);

                } else {
                    console.log(`Группа ${courseName} уже запущена!`);
                }

            } else {
                console.log(`Извините, мы не можем содержать группы в количестве ${amountOfStudents} студентов`);
            }

        } else {
            console.log(`Извините, курс ${courseName} сейчас уже не доступен`);
        }
    },

    endLearningGroup(courseName) {
        if (this.inProgressGroups.some((inProgressGroup) => inProgressGroup.courseName === courseName)) {
            this.inProgressGroups = this.inProgressGroups.filter((inProgressGroup) => inProgressGroup.courseName !== courseName);
            this.dispatch(this.__supportedEvets.GROUP_ENDED, courseName);

        } else {
            console.log(`Извините, группа не существует`);
        }
    },


    on(eventName, callback) {
        if (eventName in this.__supportedEvets) this.__callbacks[eventName] = callback;
    },

    dispatch(eventName, courseName) {
        this.__callbacks[eventName] && this.__callbacks[eventName](courseName);
    }
};


school.on(
    school.__supportedEvets.GROUP_STARTED,
    (courseName) => console.log(`Новая учебная группа ${courseName} стартовала!`),
);


school.on(
    school.__supportedEvets.GROUP_ENDED,
    (courseName) => console.log(`Группа ${courseName} успешно завершена!`),
);




school.startLearningGroup("Front-end Pro", 5);
school.startLearningGroup("Front-end Basic", 16);
school.startLearningGroup("Python advanced", 10);

school.endLearningGroup("Front-end Pro");
school.endLearningGroup("Python advanced");











