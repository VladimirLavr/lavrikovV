class Course {
    name: string;
    totalLessons: number;
    availableTeachersAmount: number;

    constructor(name: string, totalLessons: number, availableTeachersAmount: number) {
        this.name = name;
        this.totalLessons = totalLessons;
        this.availableTeachersAmount = availableTeachersAmount;
    }
}