import { PartialType } from '@nestjs/mapped-types';
import { CreateIptestDto } from './create-iptest.dto';

export class UpdateIptestDto extends PartialType(CreateIptestDto) {}
