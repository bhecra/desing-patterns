import { ITransport } from '../interfaces/transport.interface';

export class Truck implements ITransport {
  deliver(): string {
    return 'I am a Truck';
  }
}
