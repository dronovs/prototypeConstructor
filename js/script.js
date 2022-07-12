'use strict';

const human = {
    setFullName () {
        this.fullName = `${this.name} ${this.lastname}`
    },
    getAge () {
        return (new Date().getFullYear() - this.yearOfBirth);
    }
}

function Student (name, lastname, yearOfBirth) {

    this.name = name;
    this.lastname = lastname;
    this.yearOfBirth = yearOfBirth;

    this.marks = [];
    this.attendance = [];
    this.marks.length = 10;
    this.attendance.length = 10;

    let counterForAttendance = 0;
    let counterForMarks = 0;

    this.present = () => {
        if (counterForAttendance >= 10) return;
        this.attendance[counterForAttendance] = true;
        counterForAttendance++;
    }

    this.absent = () => {
        if (counterForAttendance >= 10) return;
        this.attendance[counterForAttendance] = false;
        counterForAttendance++;
    }

    this.mark = (mark) => {
        if (counterForMarks >= 10) return;
        if (mark > 10) return;
        this.marks[counterForMarks] = mark;
        counterForMarks++;
    }

    this.getAverageMark = () => {
        const sumOfMarks = this.marks.reduce((acc, nextMark) => {
            return acc + nextMark;
        }, 0)

        return sumOfMarks / this.marks.length;
    }

    this.getAverageAttendance = () => {
        const attendanceToNumber = this.attendance.map(item => Number(item));
        const sumOfVisits = attendanceToNumber.reduce((acc, nextVisit) => {
            return acc + nextVisit;
        }, 0);
        return sumOfVisits / attendanceToNumber.length;
    }

    this.summary = () => {
        if (this.getAverageMark() >= 9 && this.getAverageAttendance() >= 0.9) {
            return 'Ути какой молодчинка!';
        } else if (this.getAverageMark() < 9 && this.getAverageAttendance() < 0.9){
            return 'Редиска!'
        } else if (this.getAverageMark() < 9 || this.getAverageAttendance() < 0.9) {
            return 'Норм, но можно лучше';
        }
    }

}

Student.prototype = human;

function createFirstStudent () {
    const studentOne = new Student('Serhii', 'Dronov', 1991);
    studentOne.setFullName();
    studentOne.present();
    studentOne.absent();
    studentOne.absent();
    studentOne.absent();
    studentOne.absent();
    studentOne.absent();
    studentOne.absent();
    studentOne.absent();
    studentOne.absent();
    studentOne.present();
    studentOne.present();
    studentOne.present();
    studentOne.present();

    studentOne.mark(10);
    studentOne.mark(10);
    studentOne.mark(10);
    studentOne.mark(10);
    studentOne.mark(10);
    studentOne.mark(10);
    studentOne.mark(10);
    studentOne.mark(9);
    studentOne.mark(9);
    studentOne.mark(9);
    studentOne.mark(9);

    console.log(studentOne.getAge());
    console.log(studentOne.getAverageMark());
    console.log(studentOne.summary());

    console.log(studentOne);
}
// createFirstStudent();

function createSecondStudent () {
    const studentTwo = new Student('James', 'Hetfield',1963 );

    studentTwo.setFullName();

    studentTwo.absent();
    studentTwo.absent();
    studentTwo.absent();
    studentTwo.absent();
    studentTwo.absent();
    studentTwo.present()
    studentTwo.present()
    studentTwo.present()
    studentTwo.present()
    studentTwo.present()

    for (let i = 1; i <= 10; i++) {
        studentTwo.mark(i);
    }
    console.log(studentTwo.getAverageMark());
    console.log(studentTwo.getAverageAttendance());
    console.log(studentTwo.summary());
    console.log(studentTwo);
}
createSecondStudent();