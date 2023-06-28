import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import Counter from './custom-modules/counter';
import AddHello from './custom-modules/addHello';

@NgModule({
  declarations: [TextEditorComponent],
  exports: [TextEditorComponent],
  // imports: [CommonModule, ReactiveFormsModule, QuillModule.forRoot()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      customModules: [
        {
          // implementation: Counter,
          implementation: Counter,
          path: 'modules/counter',
        },
        {
          implementation: AddHello,
          path: 'modules/addHello',
        },
      ],
    }),
  ],
})
export class TextEditorModule {}
