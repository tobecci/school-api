import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import {FindStudentResponseDto, StudentResponseDto} from "../student/dto/student.dto"
import {StudentService} from 'src/student/student.service'
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService){

    }

    @Get('')
    getStudents(
        @Param('teacherId') teacherId: string
    ): FindStudentResponseDto[]{
        return this.studentService.getStudentsByTeacherId(teacherId)
    }

    @Put('/:studentId')
    updateStudent(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ): StudentResponseDto{
        return this.studentService.updateStudentTeacher(teacherId, studentId)
    }
}
