import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import IPinfoWrapper from 'node-ipinfo';


@Injectable()
export class IptestService {
  constructor(
    private readonly configService: ConfigService
  ){}
  // ipinfo 이용
  async findURL(ip: string) {
    const testKey = this.configService.get<string>('testKey');

    const data = await axios.get(`https://ipinfo.io/${ip}`, {
      headers: { Authorization: `Bearer ${testKey}` }
    })
    .then((res) => res.data)
    .catch((err) => console.error("err: ", err));

    return data;
  }

  // node-ipinfo 라이브러리 이용
  async findNodeIpinfo(ip: string) {
    if(!ip){
      throw new NotFoundException("IP 주소가 존재하지 않습니다.");
    }

    const ipinfo = new IPinfoWrapper(this.configService.get<string>('testKey'));
    const ipv4Reg = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    const iptrim = ip.trim();

    if(!ipv4Reg.test(iptrim)){
      throw new BadRequestException("IP 주소 형식이 올바르지 않습니다.");
    }

    const data = await ipinfo.lookupIp(iptrim);

    return data;
  }
}
