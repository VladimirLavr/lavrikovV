class LearningGroup {
    constructor(courseName, teacherName, amountOfStudents) {
        this.passedLessons = [];
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
    }
    doneLesson(title, topics) {
        if (this.passedLessons.some((lessons) => lessons.title === title)) {
            return `Lessons with title ${title} already exists.`;
        }
        // @ts-ignore
        this.passedLessons.push(new Lesson(title, topics));
    }
}
