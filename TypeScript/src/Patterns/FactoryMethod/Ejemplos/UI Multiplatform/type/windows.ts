import { Button } from '../interfaces/buttonn.interface';

export class WindowsButton implements Button {
  render(): void {
    throw new Error('render  WindowsButton');
  }
  onClick(): void {
    throw new Error('Method not implemented.');
  }
}
