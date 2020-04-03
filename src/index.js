import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import FormParent from './components/FormParent';
import ParentComponent from './components/FormParent';

ReactDOM.render(
  <div>
    <ParentComponent />
  </div>,
  document.getElementById('root')
);