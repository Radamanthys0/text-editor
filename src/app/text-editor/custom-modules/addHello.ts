import 'quill';
import Quill, { Delta } from 'quill';

// import EmojiBlot from './format-emoji-blot';
// const EmojiBlot = require('EmojiBlot');

// import * as Quill from 'quill';

const Block = Quill.import('blots/block');
let BlockEmbed = Quill.import('blots/block/embed');

export class TestBlot extends Block {
  public static blotName = 'test';
  public static tagName = 'blockquote';
}

// class ifStatementBlot extends Block { }
// ifStatementBlot['blotName'] = 'ifStatment';
// ifStatementBlot['tagName'] = 'ifStatment';
// Quill.register(ifStatementBlot);

class ifStatementBlot extends BlockEmbed {
  static create(value: any) {
    let node = super.create();
    node.setAttribute('test', value.test);
    // node.setAttribute('src', value.url);
    return node;
  }

  static value(node: any) {
    return {
      test: node.getAttribute('test'),
      // url: node.getAttribute('src'),
    };
  }
}
ifStatementBlot['blotName'] = 'ifStatment';
ifStatementBlot['tagName'] = 'ifStatment';
Quill.register(ifStatementBlot);

// Quill.register()

export interface Config {
  container: string;
  unit: 'word' | 'char';
  btn: string;
}

// const BlockEmbed = Quill.import('blots/block/embed') as { new (node, value): Object };
// export class DividerBlot extends BlockEmbed {
//     static blotName = 'divider';
//     static tagName = 'hr';
// }

export default class AddHello {
  quill: any;
  options: Config;

  constructor(quill: any, options: Config) {
    this.quill = quill;

    // if(EmojiBlot){
    //   this.quill.register({ 'formats/emoji': EmojiBlot });
    // }
    // this.quill.register({ 'formats/test': TestBlot });

    this.options = options;

    const container = document.querySelector(this.options.container);
    const btn = document.querySelector(this.options.btn);

    console.log(btn);

    if (btn) {
      btn.addEventListener('click', () => {
        // this.insertStar();
        this.insertDivBeforeAndAfterSelection();
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
    if (this.quill.getSelection()) {
      debugger;

      const cursorPosition = this.quill.getSelection().index;
      // this.quill.insertText(cursorPosition, '★', {}, 'user');
      // this.quill.setSelection(cursorPosition + 1);

      this.quill.updateContents(
        new Delta()
          .retain(6) // Keep 'Hello '
          .delete(5) // 'World' is deleted
          .insert('Quill')
          .retain(1, { bold: true }) // Apply bold to exclamation mark
      );

      // this.quill.update('user');
    }
  }
  insertDivBeforeAndAfterSelection() {
    var range = this.quill.getSelection();
    console.log('range: ', range);

    if (range) {
      if (range.length == 0) {
        console.log('User cursor is at index', range.index);
      } else {
        var text = this.quill.getText(range.index, range.length);
        console.log('User has highlighted: ', text);

        const ifSection = `<blockquote> ${text} </blockquote>`;

        // this.quill.clipboard.dangerouslyPasteHTML(range.index+range.length, ifSection, 'user');
        // this.quill.clipboard.dangerouslyPasteHTML(range.index+range.length, ifSection, this.quill.sources.USER);
        // this.quill.insertEmbed(range.index + range.length, ifSection, 'user');

        // this.quill.format('ifStatment', 'aaaaa', 'user');
        // this.quill.formatText(range.index, range.length,'ifStatment', 'user');
        let value = prompt('Enter link URL');
        console.log(value)
        this.quill.insertText(range.index, '\n', 'user');
        this.quill.insertEmbed(
          range.index + 1,
          'ifStatment',
          {
            // test: 'teste  if',
            test: value,
          },
          'user'
        );
        this.quill.setSelection(range.index + 2, 'silent');

        console.log(this.quill.root.innerHTML);

        // this.quill.update();
      }
    } else {
      console.log('User cursor is not in editor');
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
