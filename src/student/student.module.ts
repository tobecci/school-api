import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import {StudentController} from './student.controller'
import {StudentService} from './student.service'
import {validStudentMiddleware} from "../common/middleware/validStudent.middleware"

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})
export class StudentModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(validStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.GET
        })

        consumer.apply(validStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.PUT
        })
    }
}
