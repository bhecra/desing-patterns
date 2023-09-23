import { PlatformTypeEnum } from './enums/PlatformTypeEnum';
import { Button } from './interfaces/buttonn.interface';
import { HtmlButton } from './type/html';
import { WindowsButton } from './type/windows';

abstract class Dialog {
  public abstract createButton(): Button;

  public render(): void {
    const okButton: Button = this.createButton();
    okButton.render();
  }
}

class WindowsDialog extends Dialog {
  public createButton(): Button {
    return new WindowsButton();
  }
}
class WebDialog extends Dialog {
  public createButton(): Button {
    return new HtmlButton();
  }
}

function initialize(type: PlatformTypeEnum) {
  let dialog: Dialog;

  switch (type) {
    case PlatformTypeEnum.Web:
      dialog = new WebDialog();

      break;
    case PlatformTypeEnum.Windows:
      dialog = new WindowsDialog();
      break;

    default:
      throw new Error('Error! Unknown operating system.');
  }

  return dialog;
}

const dialog: Dialog = initialize(PlatformTypeEnum.Windows);

dialog.render();
