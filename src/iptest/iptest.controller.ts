import { Controller, Get, Query } from '@nestjs/common';
import { IptestService } from './iptest.service';

@Controller('iptest')
export class IptestController {
  constructor(private readonly iptestService: IptestService) {}

  // ipinfo 이용
  @Get()
  async findURL(@Query('ip') ip: string) {
    return await this.iptestService.findURL(ip);
  }

  @Get('/nodelibrary')
  async findNodeIpinfo(@Query('ip') ip: string) {
    return await this.iptestService.findNodeIpinfo(ip);
  }
}
