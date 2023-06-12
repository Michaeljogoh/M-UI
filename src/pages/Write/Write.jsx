import  { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Write.css';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {baseURL} from "../../API/API"



 function Write() {
  const [title , setTitle] = useState("");
  const [desc , setDesc] = useState("");
  const [selectFile , setSelectFile] = useState(null);

  let navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
   const newData = {
    title,
    desc:desc,
    file: selectFile
   }
    try {
     axios.post(`${baseURL}posts/uploads`, newData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  
  }
  
  return(
    <div class="container">
      <article class="my-3" id="overview">
        <div>
          <div class="bd-example-snippet bd-code-snippet">
            <div class="bd-example">
            <div className="singlePost">
            <div className="singlePostWrapper">
            {selectFile && (
            <img className="singlePostImg"  src={URL.createObjectURL(selectFile)} alt="" />
             )}
             </div>
             </div>
              <form onSubmit={handleSubmit}>
                <div class="mt-5">
                  <label for="exampleInputTitle1" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputTitle1"
                    onChange={(e) =>  setTitle(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputDesc1" class="form-label">
                    Description
                  </label>
                  <div className="editorContainer">
                  <ReactQuill
                    type="text"
                    className="editor"
                    class="form-control"
                    id="exampleInputDesc1"
                    value={desc}
                    onChange={setDesc}
                  />
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="customFile">
                    Upload
                  </label>
                  <input type="file"
                   class="form-control"
                    id="customFile" 
                    onChange={(e)=>  setSelectFile(e.target.files[0])}
                    />
                    
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Write;
