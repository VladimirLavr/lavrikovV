class ITSchool {
    constructor(name, description, maxGroupCount, maxStudentsCountPerGroup) {
        this.name = name;
        this.description = description;
        this.maxGroupCount = maxGroupCount;
        this.maxStudentsCountPerGroup = maxStudentsCountPerGroup;
        this.availableCourses = ["Front-end Pro", "Front-end Basic", "Java Basic"];
        this.startedGroups = [];
    }


    registerCourse(courseName, totalLessons, availableTeachersAmount) {
        if ((this.availableCourses.includes(courseName)) !== courseName) {
            this.startedGroups.push(new Course(courseName, totalLessons, availableTeachersAmount));
        }
    }


    startLearningGroup(courseName, teacherName, amountOfStudents) {
        if ((this.availableCourses.includes(courseName)) && amountOfStudents !== 0) {
            amountOfStudents -= 1;
            this.startedGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
        }
    }


    endLearningGroup(courseName, teacherName) {
        if (this.startedGroups.some((item) => item.teacherName === teacherName)) {
            if (this.startedGroups.some((course) => course.courseName === courseName)) {
                this.startedGroups = this.startedGroups.filter((teacher) => teacher.teacherName !== teacherName)
            }
        }
    }


    getLearningGroups(courseName) {
        this.startedGroups = this.startedGroups.filter((item) => item.courseName === courseName);
        return this.startedGroups;
    }
}


class Course {
    constructor(courseName, totalLessons, availableTeachersAmount) {
        this.courseName = courseName;
        this.totalLessons = totalLessons;
        this.availableTeachersAmount = availableTeachersAmount;
    }
}


class LearningGroup {
    constructor(courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
        this.passedLessons = [];
    }


    doneLesson(title, topics) {
        if (itSchool.startedGroups.passedLessons !== title) {
            if (itSchool.startedGroups.passedLessons !== topics) {
                itSchool.startedGroups.forEach(item => item.passedLessons.push(new Lesson(title, topics)));
            }
        }
    }
}


class Lesson {
    constructor(title, topics) {
        this.title = title;
        this.topics = topics;
    }
}


const itSchool = new ITSchool("My test school", "The first online school ever!", 30, 15);


// регистрация нового курса
itSchool.registerCourse("Java Advanced", 38, 3);
console.log(itSchool.startedGroups);



// // запуск новой группы
itSchool.startLearningGroup("Front-end Pro", "Andrii Doroshenko", 9);
itSchool.startLearningGroup("Java Basic", "Petrov Vasia", 5);
itSchool.startLearningGroup("Java Basic", "Andrii Doroshenko", 7);
itSchool.startLearningGroup("Front-end Pro", "Lavrikov Vladimir", 10);
console.log(itSchool.startedGroups);

/* 
itSchool.endLearningGroup("Front-end Pro", "Andrii Doroshenko");
console.log(itSchool.startedGroups);  */


// // работа с группой
const group = itSchool.getLearningGroups("Front-end Pro").find((group) => group.teacherName === "Andrii Doroshenko");
group.doneLesson("Classes in JS", ["Object.create()", "Function Constructors", "Classes"]);


console.log(group);  