import { Injectable } from '@nestjs/common';
import { Form } from './form.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FormService {
  @InjectRepository(Form)
  private readonly repository: Repository<Form>;

  public async create(body: any): Promise<Form> {
    return this.repository.save(body);
  }

  public async getAll(): Promise<Form[]> {
    return this.repository.find();
  }
}
