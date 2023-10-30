import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Description placeholder
 * @date 16/10/2023 - 21:30:50
 *
 * @export
 * @class CreateUserDto
 * @typedef {CreateUserDto}
 */
export class CreateUserDto implements User {
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {string}
   */
  @IsEmail()
  @ApiProperty({
    example: 'exemplo@exemplo.com',
  })
  email: string;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {string}
   */
  @IsStrongPassword()
  @ApiProperty({
    example: '12345678',
  })
  password: string;
  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {?string}
   */
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Letícia',
  })
  name?: string;

  /**
   * Description placeholder
   * @date 16/10/2023 - 21:30:50
   *
   * @type {?string}
   */
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Meu endereço',
  })
  address?: string;
}
