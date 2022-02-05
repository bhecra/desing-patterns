import { ITransport } from '../interfaces/transport.interface';

export class Airplane implements ITransport {
  public deliver(): string {
    return 'I am a Airplane';
  }
}
