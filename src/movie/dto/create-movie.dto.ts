import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovie {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  @IsOptional()
  readonly gernes: string[];
}
