import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity("packages")
export class Package {
    @PrimaryColumn()
    pointer: string

    @Column()
    name: string

    @Column()
    created: string

    @Column()
    updated: boolean

    @Column()
    creation_method: string

    @Column()
    downloads: number

    @Column()
    stargazers_count: number

    @Column()
    original_stargazers: number

    @Column()
    data: string
}

export class Data {
    name?: string
    readme?: string
    keywords?: string[]
    description?: string
    repository?: {
        url: string
        type: string
    }
    metadata?: {
        main: string
        name?: string
        author?: string
        engines?: {
            [key: string]: string;
        },
        license?: string
        version?: string
        bugs?: {

        }
    }
}