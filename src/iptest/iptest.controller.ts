import { Controller, Get, Query } from '@nestjs/common';
import { IptestService } from './iptest.service';

@Controller('iptest')
export class IptestController {
  constructor(private readonly iptestService: IptestService) {}

  // ipinfo 이용
  @Get()
  findData(@Query('ip') ip: string) {
    return this.iptestService.findData(ip);
  }
}
