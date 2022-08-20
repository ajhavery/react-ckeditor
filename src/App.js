import { useState } from 'react';
import Ckeditor from './components/Ckeditor';

const App = () => {
  const [editorState, setEditorState] = useState('');

  const stateData = ['First data', 'Second data', 'Third data', 'Fourth data'];
  const handleButtonClick = () => {
    setEditorState(stateData[Math.floor(Math.random() * stateData.length)]);
  };

  return (
    <div className='container mx-auto mt-12 space-y-4'>
      <h1 className='text-2xl font-bold text-center'>
        CKEditor React Rich Text Editor Demo
      </h1>

      <div className='flex justify-center'>
        <div className='w-full max-w-lg space-y-4'>
          <button className='border px-2 py-1' onClick={handleButtonClick}>
            Generate Random text
          </button>
          <Ckeditor
            state={editorState}
            setState={setEditorState}
            placeholder='Describe your product in 4 - 5 lines ....'
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-full max-w-lg'>
          <h2>HTML output:</h2>
          <pre>{JSON.stringify(editorState, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
