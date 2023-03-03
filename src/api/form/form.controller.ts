import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Form } from './form.entity';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  @Inject(FormService)
  private readonly service: FormService;

  @Post('create')
  create(@Body() body: any): Promise<Form> {
    return this.service.create(body);
  }

  @Get()
  getAll(): Promise<Form[]> {
    return this.service.getAll();
  }
}
