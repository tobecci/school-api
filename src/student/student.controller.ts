import { Controller, Get, Post, Put } from "@nestjs/common"

@Controller('students')
export class StudentController{

    @Get()
    getStudents(){
        return "all students"
    }
    
    @Get("/:id")
    getStudentById(){
        return "get student by id"
    }

    @Post()
    createStudent(){
        return "create a new student"
    }

    @Put("/:id")
    updateStudent(){
        return "update student"
    }
}