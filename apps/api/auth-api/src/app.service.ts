import { Injectable } from '@nestjs/common';
import { Logger } from '@packages/common';

@Injectable()
export class AppService {
  getHello(): string {
    Logger('Hello World!');

    return 'Hello World!';
  }
}
