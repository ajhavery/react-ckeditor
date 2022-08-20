import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Ckeditor = ({ state, setState, placeholder }) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={state}
        onChange={(event, editor) => {
          const data = editor.getData();
          setState(data);
        }}
        config={{
          placeholder: placeholder,
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
            '|',
            'undo',
            'redo',
          ],
          heading: {
            options: [
              {
                model: 'paragraph',
                title: 'Paragraph',
                class: 'ck-heading_paragraph',
              },
              {
                model: 'heading3',
                view: 'h3',
                title: 'Large Heading',
                class: 'ck-heading_heading3',
              },
              {
                model: 'heading4',
                view: 'h4',
                title: 'Small Heading',
                class: 'ck-heading_heading4',
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Ckeditor;
