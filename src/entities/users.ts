import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Users extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	name: string;
	@Column()
	username: string;
	@Column()
	password: string;
}

export { Users };
