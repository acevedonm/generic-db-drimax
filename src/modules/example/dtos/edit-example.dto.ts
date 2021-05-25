import { PartialType } from '@nestjs/swagger';
import { CreateExampleDto } from './create-example.dto';

export class EditExampleDto extends PartialType(CreateExampleDto) {}
