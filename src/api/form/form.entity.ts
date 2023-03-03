import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public name!: string;

  @Column({ type: 'varchar' })
  public email!: string;

  @Column({ type: 'varchar', nullable: true })
  public descriprion: string;

  @Column({ type: 'varchar', nullable: true })
  public stack: string;

  @Column({ type: 'varchar', nullable: true })
  public amount: string;

  @Column({ type: 'boolean' })
  public design: boolean;
}
