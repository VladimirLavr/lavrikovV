
class LearningGroup {
    passedLessons:any = [];
    courseName: string;
    teacherName: string;
    amountOfStudents: number;

    constructor(courseName: string, teacherName: string, amountOfStudents: number) {
        this.courseName =courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
    }

    doneLesson(title:string, topics:string) {

        if (this.passedLessons.some((lessons:any) => lessons.title === title)) {
            return `Lessons with title ${title} already exists.`;
        }

        // @ts-ignore
        this.passedLessons.push(new Lesson(title, topics));
    }
}