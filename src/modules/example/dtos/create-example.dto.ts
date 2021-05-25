import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Category } from '../enums/categories.enum';

//Los Dtos funcionan como un contrato entre el cliente y la Api. Aca se definen las validaciones de los tipos de datos

export class CreateExampleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  //Podes definir que tipo de enum recibir y que mensaje de error enviar.
  @IsEnum(Category, {
    message: 'Las categorias permitidas son TYPE ONE | TYPE TWO | TYPE THREE',
  })
  category: Category;

  //Defino que es un array de strings
  @IsString({ each: true })
  tags: string[];
}
