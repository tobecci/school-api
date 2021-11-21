import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db'
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto'

@Injectable()
export class TeacherService {
    private teachers = teachers

    getTeachers(): FindTeacherResponseDto[]{
        return this.teachers;
    }

    getTeacherById(teacherId: string): FindTeacherResponseDto{
        return teachers.find( teacher => {
            return teacher.id === teacherId
        })
    }
}
