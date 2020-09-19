import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './components/CodeEditor';
import EditorLayout from './components/EditorLayout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <EditorLayout>
      <CodeEditor />
    </EditorLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
