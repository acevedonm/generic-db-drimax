import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dtos';
import { EditExampleDto } from './dtos/edit-example.dto';

@Injectable()
export class ExampleService {
  findAll() {
    return 'ok get all';
  }
  findById(id: number) {
    return 'ok get by id';
  }
  create(dto: CreateExampleDto) {
    return 'ok create example';
  }
  update(id: number, dto: EditExampleDto) {
    return 'ok update example';
  }
  delete(id: number) {
    return 'ok delete example';
  }
}
