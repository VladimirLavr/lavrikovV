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
        if (!(this.availableCourses.includes(courseName))) {
            this.startedGroups.push(new Course(courseName, totalLessons, availableTeachersAmount));

        } else {
            console.log(`Извините,группа ${courseName} уже существует!`);
        }
    }


    startLearningGroup(courseName, teacherName, amountOfStudents) {
        if (this.availableCourses.includes(courseName)) {
            if (this.startedGroups.some((item)=>item.availableTeachersAmount > 0) {
                this.startedGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
                this.startedGroups.some((item) => item.availableTeachersAmount -= 1);

            } else console.log(`Извините,нет достаточного количества преподавателей!`);

        } else console.log(`Извините,курса ${courseName} не существует!`);

    }


    endLearningGroup(courseName, teacherName) {
        if (this.startedGroups.some((item) => item.teacherName === teacherName)) {
            if (this.startedGroups.some((course) => course.courseName === courseName)) {
                this.startedGroups = this.startedGroups.filter((teacher) => teacher.teacherName !== teacherName);

            } else console.log(`Извините, курса ${courseName} не существует`);

        } else console.log(`Извините, преподавателя ${teacherName} не существует`);
    }


    getLearningGroups(courseName) {
        if (this.startedGroups.some((item) => item.courseName === courseName)) {
            this.startedGroups = this.startedGroups.filter((item) => item.courseName === courseName);
            return this.startedGroups;

        } else console.log(`Извините, ничего по вашему запросу не найдено!`);
    }
}

