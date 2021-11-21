import { Module } from '@nestjs/common';
import {StudentModule} from '../student/student.module'
import {TeacherModule} from '../teacher/teacher.module'
import {ConfigModule} from "@nestjs/config"

@Module({
  imports: [StudentModule, TeacherModule, ConfigModule.forRoot()],
})
export class AppModule {}
