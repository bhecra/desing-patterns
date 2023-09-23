import { IChair } from '../interfaces/chair.interface';

export class VictorianChair implements IChair {
  hasLegs(): boolean {
    throw new Error('Method not implemented.');
  }
  sitOn(): boolean {
    throw new Error('Method not implemented.');
  }
}
