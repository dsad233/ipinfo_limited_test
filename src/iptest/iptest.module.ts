import { Module } from '@nestjs/common';
import { IptestService } from './iptest.service';
import { IptestController } from './iptest.controller';

@Module({
  controllers: [IptestController],
  providers: [IptestService],
})
export class IptestModule {}
