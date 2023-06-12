import { useEffect, useState } from "react";
import "./Single.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../API/API";
import DOMPurify from "dompurify";

function SinglePost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${baseURL}posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPosts();
  }, [path]);

  return (
    <>
      {/* Image */}
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img src={post.photo} class="singlePostImg object-fit-cover" alt="" />
          )}
        </div>
        {/* Title */}
        <div class="text-center  mt-4">
          <h1>
            <strong>{title}</strong>
          </h1>
        </div>
        <p class="blog-post-meta p-4">
          <span>{new Date(post.createdAt).toString()}</span> by {post.username}
        </p>
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>

        {/* desc */}
        <div
          class="p-4"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(desc),
          }}
        ></div>
      </div>
    </>
  );
}

export default SinglePost;
