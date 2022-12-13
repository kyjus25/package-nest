import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity("names")
export class Name {
    @PrimaryColumn()
    pointer: string

    @Column()
    @ApiProperty()
    name: string
}