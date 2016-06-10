'use strict';

function Student(fname, lname){
  this.fname = fname;
  this.lname = lname;
  this.courses = new Array;
}

Student.prototype.name = function () {
  return `${this.fname} ${this.lname}`;
};

Student.prototype.courses = function () {
  return this.courses;
};

Student.prototype.enroll = function (course) {
  course.students.push(this);
  this.courses.push(course);
};

Student.prototype.course_load = function () {
  let results = {};
  this.courses.forEach(function(course){
  if (results[course.department] === undefined){
    results[course.department] = course.credits;
  }else {
    results[course.department] += course.credits;
  }
  });
  return results;
};

function Course(name, department, credits, students){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = students;
}

Course.prototype.students = function(){
  return this.students;
};

Course.prototype.add_student = function (student) {
  student.enroll(this);
};

let jie = new Student("Jie", "Wei");
let cs = new Course("cs101", "cs", 4, []);

console.log(jie.name());
jie.enroll(cs);
console.log(jie.course_load());
