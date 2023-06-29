import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import Quill from 'quill';
import { TestBlot } from './custom-modules/addHello';


let Inline = Quill.import('blots/inline');

class BoldBlot extends Inline { }
BoldBlot['blotName'] = 'test';
BoldBlot['tagName'] = 'strong';

Quill.register(BoldBlot);




@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent implements OnInit {
  textControl = new FormControl('');

  $textValue2 = this.textControl.valueChanges.subscribe(a => console.log('a:',a));
  $textValue = this.textControl.valueChanges;

  // editorConfig = {
  //   placeholder: 'teste',
  //   modules: {
  //     toolbar: '#toolbar',
  //   },
  // };

  constructor() {}

  ngOnInit(): void {}

  customButtonClick(e: any) {
    debugger;
    console.log(e);
  }

  /** aqui eu basicamente estou colocando um handler para quando o usuario clica no btn de imagem, dessa forma ao inves de fazer o upload
   * ele vai escrever "teste na tela". Para isso, eu tenho 2 metodos. O primeiro pega a referencia do Quill no Angular (getEditorInstance)
   * e aproveita e adiciona um handler para a imagem (toolbar.addHandler('image', this.imageHandler);). Esse Handler vai fazer a magia, sempre
   * que clicar no btn de umagem eu vou executar a função  imageHandler;
   */
  quillEditorRef: any;
  getEditorInstance(editorInstance: any) {
    console.log('carregou', editorInstance);

    this.quillEditorRef = editorInstance;
    // this.quillEditorRef.register( {'formats/emoji': EmojiBlot})
    // console.log(this.quillEditorRef)
    // const toolbar = editorInstance.getModule('toolbar');
    // toolbar.addHandler('image', this.imageHandler);

    // this.quillEditorRef.register({ 'formats/test': TestBlot });

  }

  imageHandler = (image: any, callback: any) => {
    const range = this.quillEditorRef.getSelection();
    const img = '<div> Teste </div>';
    this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
  };
}
