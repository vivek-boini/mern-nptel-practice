class CourseRepository {

  constructor() {
    this.courses = [
      { id: "1", name: "Physics", capacity: 2, students: [] },
      { id: "2", name: "Mathematics", capacity: 3, students: [] }
    ]
  }

  findAll() {
    return this.courses
  }

  findById(id) {
    return this.courses.find(course => course.id === id)
  }

  save(course) {
    const index = this.courses.findIndex(c => c.id === course.id)

    if (index !== -1) {
      this.courses[index] = course
    } else {
      this.courses.push(course)
    }
  }

  enrollStudent(courseId, studentId) {
    const course = this.findById(courseId)

    if (course && !course.students.includes(studentId)) {
      course.students.push(studentId)
    }
  }

  findByStudentId(studentId) {
    return this.courses.filter(course =>
      course.students.includes(studentId)
    )
  }

  delete(courseId) {
    const index = this.courses.findIndex(c => c.id === courseId)

    if (index !== -1) {
      this.courses.splice(index, 1)
    }
  }

}

module.exports = CourseRepository