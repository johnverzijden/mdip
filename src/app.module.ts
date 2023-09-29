import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm/dist/typeorm.module";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {ReportsModule} from './reports/reports.module';
import {UserEntity} from "./users/user.entity";
import {ReportEntity} from "./reports/report.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot(
            {
                type: 'mysql',
                database: 'mdip',
                username: 'root',
                password: 'john2803',
                entities: [UserEntity, ReportEntity],
                synchronize: true, //only development
            }
        ),
        UsersModule,
        ReportsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
