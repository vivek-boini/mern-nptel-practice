const express = require("express")

const CourseRepository = require("./src/repositories/CourseRepository")
const CourseService = require("./src/services/CourseService")

const app = express()

app.use(express.json())

// Dependency Injection
const courseRepository = new CourseRepository()
const courseService = new CourseService(courseRepository)


// Enroll student
app.post("/courses/:id/enroll", (req, res) => {
  try {

    const result = courseService.enroll(req.params.id, req.body.studentId)

    res.json(result)

  } catch (error) {

    res.status(400).json({ error: error.message })

  }
})


// Get student courses
app.get("/students/:id/courses", (req, res) => {

  const courses = courseService.getStudentCourses(req.params.id)

  res.json(courses)

})


// Delete course (challenge)
app.delete("/courses/:id", (req, res) => {

  try {

    const result = courseService.deleteCourse(req.params.id)

    res.json(result)

  } catch (error) {

    res.status(400).json({ error: error.message })

  }

})


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})