import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const TextEditor = () => {
    const [editorState, setEditorState] = useState({
        html: '',
        theme: 'snow',
        placeholder: 'Write something...',
    });

    const changeHandler = (html) => {
        setEditorState({ ...editorState, html: html });
    };

    return <ReactQuill
        theme={editorState.theme}
        value={editorState.html}
        onChange={changeHandler}
    />



};
