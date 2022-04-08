const school = {
    name: 'Online School',
    description: 'Simple online school description',
    maxGroup: 5,
    maxStudent: 15,
    avialableCourse: ["Front-end Pro", "Front-end Basic", "Java Basic", "Java Advanced"],
    inProgressGroups: [],
    __callbacks: {},
    __supportedEvets: { GROUP_STARTED: "GROUP_STARTED", GROUP_ENDED: "GROUP_ENDED" },


    addCourse(courseName) {
        if (!(this.avialableCourse.includes(courseName))) {
            this.avialableCourse.push(courseName);

        } else {
            console.log(`"Невозможно добавить группу ${courseName}, которая уже существует"`);
        }
    },


    removeCourse(courseName) {
        if (this.avialableCourse.some((item) => item === courseName)) {
            this.avialableCourse = this.avialableCourse.filter((course) => course !== courseName);

        } else {
            console.log(`Вы пытаетесь удалить группу${courseName}, которая не существует!`);
        }
    },


    startLearningGroup(courseName, amountOfStudents, totalLessons, passedLessons) {
        if (this.avialableCourse.includes(courseName)) {

            if (amountOfStudents <= this.maxStudent) {

                if (!this.inProgressGroups.some((inProgressGroup) => inProgressGroup.courseName === courseName)) {
                    this.inProgressGroups.push({ courseName, amountOfStudents, totalLessons, passedLessons });
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

            if (this.inProgressGroups.some((inProgressGroup) => !(inProgressGroup.totalLessons === inProgressGroup.passedLessons))) {
                console.log(`Извините, вы не можете закончить группу ${courseName} раньше времени! `);

            } else {
                this.inProgressGroups = this.inProgressGroups.filter((inProgressGroup) => inProgressGroup.courseName !== courseName);
                this.dispatch(this.__supportedEvets.GROUP_ENDED, courseName);
            }

        } else {
            console.log(`Извините, группа не существует`);
        }
    },


    doneLesson(courseName) {
        if (this.inProgressGroups.some((item)=>item.courseName === courseName)){
        this.inProgressGroups.find((countPassedLessons) => {
            let count = 1;
            countPassedLessons.passedLessons = countPassedLessons.passedLessons + count;
            console.log(`В группе ${courseName}, вы прошли еще одно занятие`);
        });
        
    } else {
        console.log(`Нет такой группы ${courseName}, в которую вы добавляете пройденое занятие`);
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




school.startLearningGroup("Front-end Pro", 5, 3, 7);
/* school.startLearningGroup("Front-end Basic", 16, 3, 5)
school.startLearningGroup("Python advanced", 10, 3, 5); */

school.addCourse("Front-end Pro");

school.removeCourse('Java Basic');



school.endLearningGroup("Front-end Pro");
school.endLearningGroup("Front-advanced");

school.doneLesson('Front-end Pro');


/* school.addCourse("C# Basic");

school.removeCourse("Java Advanced"); */

















