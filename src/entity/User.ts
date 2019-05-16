import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export enum UserType {
    Normal = "normal",
    Admin = "admin",
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({
        type: "simple-enum",
        enum: UserType,
    })
    ty: UserType;
}
