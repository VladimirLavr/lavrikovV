interface passedLessonsObj{
    title:string,
    topics:string
}

class LearningGroup {
    passedLessons:passedLessonsObj[] = [];

    constructor(public courseName: string, public teacherName: string, public amountOfStudents: number) {
    }

    doneLesson(title:string, topics:string) {

        if (this.passedLessons.some((lessons) => lessons.title === title)) {
            return `Lessons with title ${title} already exists.`;
        }

        // @ts-ignore
        this.passedLessons.push(new Lesson(title, topics));
    }
}