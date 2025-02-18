import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Layout from "../components/Layout";
function AddNews() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(convertToRaw(editorState.getCurrentContent()));
  }, [editorState]);
  return (
    <div>
      <Layout>
        <h1 className="text-2xl font-semibold mt-5 ml-5">AddNews</h1>
        <div className="px-5 py-5">
          <input
            type="text"
            className="border-2 h-10 w-full border-gray-300 px-5 mb-2"
            placeholder="Title"
          />
          <textarea
            className="border-2 w-full border-gray-300 px-5 "
            rows="4"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="border-2 border-gray-800 mx-5 rounded px-2">
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            editorClassName="draft-editor"
          />
        </div>
      </Layout>
    </div>
  );
}
export default AddNews;
