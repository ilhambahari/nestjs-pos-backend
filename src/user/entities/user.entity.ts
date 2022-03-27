import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama_user: string

    @Column()
    email: string

    @Column()
    username: string

    @Column()
    password: string
    
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
