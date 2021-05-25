import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateExampleDto } from './dtos';
import { ExampleService } from './example.service';

//El controller es quien recibe la Request, y se la envia al servicio correspondiente.

@Controller('example')
export class ExampleController {
  constructor(private readonly _exampleService: ExampleService) {}
  @Get()
  getExample() {
    return this._exampleService.findAll;
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return this._exampleService.findById(id);
  }

  @Post()
  post(@Body() body: CreateExampleDto) {
    return this._exampleService.create(body);
  }

  @Put(':id')
  put(@Param('id', ParseIntPipe) id: number, @Body() body: CreateExampleDto) {
    return this._exampleService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this._exampleService.delete(id);
  }
}
