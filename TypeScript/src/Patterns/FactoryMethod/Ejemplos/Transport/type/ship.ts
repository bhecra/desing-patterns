import { ITransport } from '../interfaces/transport.interface';

export class Ship implements ITransport {
  public deliver(): string {
    return 'I am a Ship';
  }
}
