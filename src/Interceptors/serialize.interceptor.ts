import {UseInterceptors, NestInterceptor, ExecutionContext, CallHandler} from "@nestjs/common";
import {Observable} from "rxjs";
import {map} from "rxjs/operators"
import {ClassConstructor, plainToInstance} from "class-transformer";
import {UserDtoInterface} from "../users/dtos/user.dto.interface";

export function ViewInterceptor(dto: ClassConstructor<UserDtoInterface>) {
    return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor implements NestInterceptor{
    constructor(private dto: ClassConstructor<UserDtoInterface>) {}

    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        return handler.handle().pipe(
            map((data: UserDtoInterface) => {
                return plainToInstance(this.dto, data, {
                    excludeExtraneousValues: true
                });
            })
        );
    }
}