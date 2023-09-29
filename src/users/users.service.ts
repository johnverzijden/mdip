import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private repository: Repository<UserEntity>) {}

    create(
        email: string,
        password: string
    ) {
        const user = this.repository.create({
            email,
            password
        });

        return this.repository.save(user);
    }

    findOne(id: number) {
        return this.repository.findOneBy({id});
    }

    find(email: string) {
        return this.repository.find({where: {email}})
    }

    async update(id: number, data: Partial<UserEntity>) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error(`User with id {id} not found`)
        }

        Object.assign(user, data);

        return this.repository.save(user);
    }

    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error(`User with id {id} not found.`)
        }

        return this.repository.remove(user);
    }
}
