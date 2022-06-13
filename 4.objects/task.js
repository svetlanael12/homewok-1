function Student(name, gender, age) {
  name,
  gender,
  age
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  this.marks.push(mark);
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  
  for (let m of mark) {
    this.marks.push(m);
  }
}

Student.prototype.getAverage = function () {
  let array = this.marks;

  return array.reduce((sum, item) => sum + item, 0) / array.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}