import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("versions")
export class Version {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    package: string

    @Column()
    status: string

    @Column()
    semver: string

    @Column()
    license: string

    @Column()
    engine: {
        atom: string
        node: string
    }

    @Column()
    meta: Object
}