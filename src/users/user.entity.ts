import {AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
// import {Exclude} from "class-transformer";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    // @Exclude()
    password: string

    @AfterInsert()
    logUserCreate() {
        console.log('Inserted the user with email', this.email);
    }

    @AfterRemove()
    logUserRemove() {
        console.log('Removed user with email', this.email);
    }

    @AfterUpdate()
    LogUserAfterUpdate() {
        console.log('Updated user with email', this.email);
    }
}