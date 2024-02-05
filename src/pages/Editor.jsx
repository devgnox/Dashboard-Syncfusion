import React from 'react'
import Header from '../components/Header';
import { HtmlEditor, Image, Link, QuickToolbar, RichTextEditorComponent, Inject, Toolbar} from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent id="editor" >
        
        <Inject services={[ Link, Image, Toolbar, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default Editor