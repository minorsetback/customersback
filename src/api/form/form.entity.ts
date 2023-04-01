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
  public amount: string;

  @Column({ type: 'varchar', nullable: true })
  public kind_of_activity: string;
  @Column({ type: 'varchar', nullable: true })
  public target_audience: string;
  @Column({ type: 'varchar', nullable: true })
  public basic_colors: string;
  @Column({ type: 'varchar', nullable: true })
  public keywords: string;
  @Column({ type: 'varchar', nullable: true })
  public recommendations_for_site_structure: string;
  @Column({ type: 'varchar', nullable: true })
  public references: string;
  @Column({ type: 'varchar', nullable: true })
  public competitors: string;
  @Column({ type: 'varchar', nullable: true })
  public integrations: string;

  @Column({ type: 'boolean' })
  public design: boolean;
}
