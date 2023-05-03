class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `<form method="post" action="${this.action}">
    ${this.controls.reduce((acc, control) => {
      return (
        acc +
        `<div class="field-container">
          ${this.getLabel(control)}
          ${this.getInput(control)}
        </div>`
      );
    }, '')}

    <button type"submit">Enviar</button>
    </form>`;
  }

  getLabel(control) {
    return `<label>${control.text}</label>`;
  }
  getInput(control) {
    return `<input type="${control.type}" id="${control.name}" name="${control.name}" ></input>`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({ name, text, type: 'text' });
    return this;
  }

  setEmail(name, text) {
    this.controls.push({ name, text, type: 'email' });
    return this;
  }

  setDate(name, text) {
    this.controls.push({ name, text, type: 'date' });
    return this;
  }

  reset() {
    this.controls = [];
    this.action = '';
  }

  build() {
    const frm = new Form(this.controls, this.action);
    this.reset();
    return frm;
  }
}

const frmBuilder = new FormBuilder();

const formPeople = frmBuilder
  .setAction('add.php')
  .setText('firsName', 'Nombre')
  .setText('lastName', 'Apellido')
  .setText('city', 'Ciudad')
  .build();

form1.innerHTML = formPeople.getContent();

const formPeople2 = frmBuilder.setAction('add.php')
  .setText('firsName', 'Nombre')
  .setText('lastName', 'Apellido')
  .setText('city', 'Ciudad')
  .setEmail('email', 'Correo')
  .setDate('date', 'Fecha Nacimiento')
  .build();

  form2.innerHTML =formPeople2.getContent()
