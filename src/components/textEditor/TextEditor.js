import React from 'react'
import { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../textEditor/texteditor.css'
import { EditorState } from 'draft-js';
function TextEditor() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty(),
    )
    return (
        <div className='bg-[#F8F9FA] min-h-screen pb-16'>

            <Editor
                editorState={editorState} onEditorStateChange={setEditorState}
                toolbarClassName='flex sticky top-0 z-50 !justify-center mx-auto toolbar-class '
                editorClassName='mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border p-10 max-h-20xl  ' />;

        </div>
    )
}

export default TextEditor
