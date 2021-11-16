import { Controller, Post, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    @Get('')
    getStudents(){
        return "get students for a teacher"
    }

    @Put('/:studentId')
    updateStudent(){
        return "update the student for this teacher"
    }
}
