import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [TextEditorComponent],
  exports: [TextEditorComponent],
  imports: [CommonModule, QuillModule.forRoot()],
})
export class TextEditorModule {}
