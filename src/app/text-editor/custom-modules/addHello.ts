import 'quill';

export interface Config {
  container: string;
  unit: 'word' | 'char';
  btn: string;
}

export default class AddHello {
  quill: any;
  options: Config;

  constructor(quill: any, options: Config) {
    this.quill = quill;
    this.options = options;

    const container = document.querySelector(this.options.container);
    const btn = document.querySelector(this.options.btn);

    console.log(btn);

    if (btn) {
      btn.addEventListener('click', () => {
        this.insertStar();
      });
    }

    // this.quill.on('editor-change', (e: any) => {
    //   debugger;
    //   console.log(e);

    //   // const cursorPosition = this.quill.getSelection().index;
    //   // this.quill.insertText(cursorPosition, "★");
    //   // this.quill.setSelection(cursorPosition + 1);

    //   debugger;
    //   const length = this.calculate();

    //   if (container) {
    //     container.innerHTML = length + ' ' + this.options.unit + 's';
    //   }
    // });
  }

  insertStar() {
    debugger;
    if(this.quill.getSelection()){
      const cursorPosition = this.quill.getSelection().index;
      this.quill.insertText(cursorPosition, '★');
      this.quill.setSelection(cursorPosition + 1);
    }
  }

  // calculate() {
  //   const text = this.quill.getText().trim();

  //   if (this.options.unit === 'word') {
  //     return !text ? 0 : text.split(/\s+/).length;
  //   }
  //   return text.length;
  // }
}
