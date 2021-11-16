import { Controller, Post, Get, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
    @Get()
    getAllTeachers(){
        return "get all teachers"
    }

    @Get(`/:id`)
    getTeacherById(){
        return "get teachers by id"
    }
}
