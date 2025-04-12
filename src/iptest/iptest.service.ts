import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class IptestService {
  constructor(
    private readonly configService: ConfigService
  ){}
  // ipinfo 이용
  async findData(ip: string) {
    const testKey = this.configService.get<string>('testKey');

    const data = axios.get(`https://ipinfo.io/${ip}`, {
      headers: { Authorization: `Bearer ${testKey}` }
    })
    .then((res) => res.data)
    .catch((err) => console.error("err: ", err));

    return data;
  }
}
