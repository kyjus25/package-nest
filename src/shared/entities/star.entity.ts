import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity("stars")
export class Star {
    @PrimaryColumn()
    package: string

    @Column()
    userid: string
}