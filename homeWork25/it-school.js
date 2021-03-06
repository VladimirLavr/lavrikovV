class ITSchool {
    constructor(name, description, maxGroupCount, maxStudentsCountPerGroup) {
        this.name = name;
        this.description = description;
        this.maxGroupCount = maxGroupCount;
        this.maxStudentsCountPerGroup = maxStudentsCountPerGroup;
        this.availableCourses = [];
        this.startedLearningGroups = [];
        this.startedGroups = [];
    }
    registerCourse(courseName, totalLessons, availableTeachersAmount) {
        if (this.availableCourses.some((course) => course.name === courseName)) {
            return `Course ${courseName} already exist.`;
        }
        // @ts-ignore
        this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
    }
    startLearningGroup(courseName, teacherName, amountOfStudents) {
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
