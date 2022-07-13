'use strict';

class Human {
    _name = null;
    _lastName = null;
    _yearOfBirth = null;

    constructor(name, lastname, yearOfBirth) {
        this._name = name;
        this._lastName = lastname;
        this._yearOfBirth = yearOfBirth;
    }

    setFullName () {
        this.fullName = `${this._name} ${this._lastName}`
    }

    getAge () {
        return (new Date().getFullYear() - this._yearOfBirth);
    }
}

class Student extends Human {
    marks = null;
    attendance = null;
    counterForAttendance = 0;
    counterForMarks = 0;


    constructor(name, lastname, yearOfBirth) {
        super(name, lastname, yearOfBirth);
        this.marks = [];
        this.attendance = [];
        this.marks.length = 10;
        this.attendance.length = 10;


    }
    present = () => {
        if (this.counterForAttendance >= 10) return;
        this.attendance[this.counterForAttendance] = true;
        this.counterForAttendance++;
    }

    absent = () => {
        if (this.counterForAttendance >= 10) return;
        this.attendance[this.counterForAttendance] = false;
        this.counterForAttendance++;
    }

    mark = (mark) => {
        if (this.counterForMarks >= 10) return;
        if (mark > 10) return;
        this.marks[this.counterForMarks] = mark;
        this.counterForMarks++;
    }

    getAverageMark = () => {
        const sumOfMarks = this.marks.reduce((acc, nextMark) => {
            return acc + nextMark;
        }, 0)

        return sumOfMarks / this.marks.length;
    }

    getAverageAttendance = () => {
        const attendanceToNumber = this.attendance.map(item => Number(item));
        const sumOfVisits = attendanceToNumber.reduce((acc, nextVisit) => {
            return acc + nextVisit;
        }, 0);
        return sumOfVisits / attendanceToNumber.length;
    }

    summary = () => {
        if (this.getAverageMark() >= 9 && this.getAverageAttendance() >= 0.9) {
            return 'Ути какой молодчинка!';
        } else if (this.getAverageMark() < 9 && this.getAverageAttendance() < 0.9){
            return 'Редиска!'
        } else if (this.getAverageMark() < 9 || this.getAverageAttendance() < 0.9) {
            return 'Норм, но можно лучше';
        }
    }

}

const newStudent = new Student('Serhii', 'Dronov', 1991);
for (let i = 1; i <= 10; i++) {
    newStudent.mark(10);
}
for (let i = 1; i <= 5; i++) {
    newStudent.present();
    newStudent.absent();
}

console.log(newStudent.getAverageAttendance());
console.log(newStudent.getAverageMark());
console.log(newStudent.summary());
console.log(newStudent);