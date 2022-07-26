interface avialableCourseObj {
    courseName: string,
    totalLessons: number,
    availableTeachersAmount: number,
    teacherName: string,
    name: string
}

class ITSchool {
    availableCourses: avialableCourseObj[] = [];
    startedLearningGroups: avialableCourseObj[] = [];
    startedGroups: avialableCourseObj[] = [];

    constructor(public name: string, public description: string, public maxGroupCount: number, public maxStudentsCountPerGroup: number) {
    }


    registerCourse(courseName: string, totalLessons: number, availableTeachersAmount: number) {
        if (this.availableCourses.some((course) => course.name === courseName)) {
            return `Course ${courseName} already exist.`;
        }
        // @ts-ignore
        this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
    }


    startLearningGroup(courseName: string, teacherName: string, amountOfStudents: number) {
        const courseForNewLearningGroup = this.availableCourses.find((course) => (course.name === courseName) && course.availableTeachersAmount);

        if (courseForNewLearningGroup) {
            // @ts-ignore
            this.startedLearningGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
            courseForNewLearningGroup.availableTeachersAmount -= 1;
        }
    }


    endLearningGroup(courseName, teacherName) {
        this.startedLearningGroups = this.startedGroups.filter((group) => (group.courseName !== courseName) && (group.teacherName !== teacherName));
    }


    getLearningGroups(courseName) {
        return this.startedLearningGroups.filter((group) => group.courseName === courseName);
    }
}

