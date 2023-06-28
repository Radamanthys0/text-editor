import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent implements OnInit {
  textControl = new FormControl('');

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
    // console.log(this.quillEditorRef)
    const toolbar = editorInstance.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler);
  }

  imageHandler = (image: any, callback: any) => {
    const range = this.quillEditorRef.getSelection();
    const img = '<div> Teste </div>';
    this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
  };
}
