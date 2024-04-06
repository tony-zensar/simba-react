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




    return <> {isEdit ? <div>

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
                                {/* <Icon component={<RemoveIcon />} /> */}
                                <Icon onClick={() => setIsEdit(true)} component={<EditIcon />} />
                                <Icon onClick={addClauseHandler} component={<AddIcon />} />
                            </>
                        </div> : null
                }
            </div>
        </div>
    }

    </>





};
