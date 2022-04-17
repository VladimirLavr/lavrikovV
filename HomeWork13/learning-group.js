class LearningGroup {
    constructor(courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
        this.passedLessons = [];
    }


    doneLesson(title, topics) {
        if (itSchool.name !== title) {
            if (itSchool.description !== topics) {
                itSchool.startedGroups.forEach(item => item.passedLessons.push(new Lesson(title, topics)));

            } if (itSchool.name === title) console.log('Такая тема уже существует');

        } if (itSchool.description === topics) console.log('Такай урок уже существует');
    }
}
