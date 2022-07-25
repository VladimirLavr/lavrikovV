

class ITSchool {
    availableCourses: any = [];
    startedLearningGroups: any = [];
    name: string;
    description: string;
    maxGroupCount: number;
    maxStudentsCountPerGroup: number;
    startedGroups: any;

    constructor(name: string, description: string, maxGroupCount: number, maxStudentsCountPerGroup: number) {
        this.name = name;
        this.description = description;
        this.maxGroupCount = maxGroupCount;
        this.maxStudentsCountPerGroup = maxStudentsCountPerGroup;
    }


    registerCourse(courseName: string, totalLessons: number, availableTeachersAmount: number) {
        if (this.availableCourses.some((course:any) => course.name === courseName)) {
            return `Course ${courseName} already exist.`;
        }
        // @ts-ignore
        this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
    }


    startLearningGroup(courseName: string, teacherName: string, amountOfStudents: number) {
        const courseForNewLearningGroup = this.availableCourses.find((course:any) => (course.name === courseName) && course.availableTeachersAmount);

        if (courseForNewLearningGroup) {
            // @ts-ignore
            this.startedLearningGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
            courseForNewLearningGroup.availableTeachersAmount -= 1;
        }
    }


    endLearningGroup(courseName: any, teacherName: any) {
        this.startedLearningGroups = this.startedGroups.filter((group:any) => (group.courseName !== courseName) && (group.teacherName !== teacherName));
    }


    getLearningGroups(courseName: any) {
        return this.startedLearningGroups.filter((group:any) => group.courseName === courseName);
    }
}

