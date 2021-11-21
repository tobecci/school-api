import { Controller, Post, Get, Put, Param } from '@nestjs/common';
import {FindTeacherResponseDto} from "./dto/teacher.dto"
import { TeacherService } from "src/teacher/teacher.service"

@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService:TeacherService){

    }
    @Get()
    getAllTeachers(): FindTeacherResponseDto[]{
        return this.teacherService.getTeachers();
    }

    @Get(`/:teacherId`)
    getTeacherById(
        @Param('teacherId') teacherId: string
    ): FindTeacherResponseDto{
        return this.teacherService.getTeacherById(teacherId);
    }
}
