import { Button } from '../interfaces/buttonn.interface';

export class HtmlButton implements Button {
  render(): void {
    throw new Error('render HtmlButton.');
  }
  onClick(): void {
    throw new Error('Method not implemented.');
  }
}
