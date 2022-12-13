import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    created_at: string

    @Column()
    username: string

    @Column()
    node_id: string

    @Column()
    avatar: string

    @Column()
    data: any
}