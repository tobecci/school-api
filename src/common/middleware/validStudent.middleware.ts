import {HttpException, Injectable, NestMiddleware} from "@nestjs/common"
import {Request, Response, NextFunction} from "express"
import {students} from "../../db"


@Injectable()
export class validStudentMiddleware implements NestMiddleware{
    
    use(req: Request, res: Response, next: NextFunction){
        console.log("this middleware was called")
        const studentId = req.params.studentId;
        const studentExists = students.some(student => {
            return student.id === studentId;
        })
        if(!studentExists){
            throw new HttpException("Student not found", 400)
        }
        next()
    }
}