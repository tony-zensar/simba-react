import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ButtonSmall } from '../';
import { AddIcon, EditIcon } from '../../assets/IconList';
import { Icon } from '../icon/Icon';
import "./clauses-editor.scss";


export const ClauseEditor = ({ data, addClauseHandler, selectedClause }) => {
    const [editorState, setEditorState] = useState({
        html: '',
        theme: 'snow',
        placeholder: 'Write something...',
    });

    const [toolbar, showToolbar] = useState(false)

    const [isEdit, setIsEdit] = useState(false)

    const changeHandler = (html) => {
        console.log(html)
        setEditorState({ ...editorState, html: html });
    };
    useEffect(() => {
        setEditorState({ ...editorState, html: data });
    }, [data])


    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],      // toggled buttons
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'align': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        ['blockquote', 'code-block'],
        // ['link', 'image', 'video', 'formula'],
        // [{ 'direction': 'rtl' }],                         // text direction
        // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        // [{ 'font': [] }],
        // ['clean']                                         // remove formatting button
    ];



    return <ReactQuill
        className='clause-editor'
        modules={{ toolbar: toolbarOptions }}
        value={editorState.html}
        onChange={changeHandler}

    />

    /*
    {isEdit ? <div>

        <ReactQuill
            theme={editorState.theme}
            value={editorState.html}
            onChange={changeHandler}

        />
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px", gap: "8px" }}>
            <ButtonSmall label={"Update Clause"} onClick={() => setIsEdit(false)} />
            <ButtonSmall label={"Cancel"} onClick={() => setIsEdit(false)} />
        </div>
    </div>

        :
        <div>
            <div onMouseEnter={() => showToolbar(true)} onMouseLeave={() => showToolbar(false)} className='clauses-text '>
                {parse(editorState.html)}
                {
                    toolbar ?
                        <div className='clause-toolbar'>
                            <>
                                 <Icon component={<RemoveIcon />} /> 
                                <Icon onClick={() => setIsEdit(true)} component={<EditIcon />} />
                                <Icon onClick={addClauseHandler} component={<AddIcon />} />
                            </>
                        </div> : null
                }
            </div>
        </div>
    }

    </>
    */





};
