import 'quill';

export interface Config {
  container: string;
  unit: 'word' | 'char';
}

export interface QuillInstance {
  on: any;
  getText: any;
}

export default class Counter {
  quill: QuillInstance;
  options: Config;

  constructor(quill: QuillInstance, options: Config) {
    this.quill = quill;
    this.options = options;

    const container = document.querySelector(this.options.container);

    this.quill.on('editor-change', () => {

      debugger
      const length = this.calculate();

      if(container){
        container.innerHTML = length + ' ' + this.options.unit + 's';
      }
    });
  }

  calculate() {
    const text = this.quill.getText().trim();

    if (this.options.unit === 'word') {
      return !text ? 0 : text.split(/\s+/).length;
    }
    return text.length;
  }
}
