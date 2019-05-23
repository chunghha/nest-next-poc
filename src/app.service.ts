import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public root(): string {
    return 'Hello World!';
  }

  public second(): string {
    return 'I am the second page!';
  }
}
