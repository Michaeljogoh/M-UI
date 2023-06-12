/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { baseURL } from "../../API/API";
import Loading from "../../Loading/Loading";

function Posts() {
  const [posts, setPosts] = useState([])
  const [isLoaded, setLoaded] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${baseURL}posts` + search);
      setPosts(res.data.getPosts);

      console.log(res)
      setLoaded(true);
    };
    fetchData();
  }, [search]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent.slice(0 , 149)

  }

  return (
    <>
  
      {isLoaded ? (
      posts?.map((post, i) => {
          return (
            <div class="container">
            <div key={i}>
    
       <div class="row">
       <div class="col">
       <div class="card mt-5">
                      <img
                       class="bd-placeholder-img card-img-top object-fit-cover"
                       width="100%"
                       height="200"
                       role="img"
                      src={post.photo}
                      alt=""
                       />
                      <div class="card-body mt-2">
                        <h5 class="card-title">{post.title}</h5>
                        <p class="card-text ">{getText(post.desc )}</p>
                        <Link to={`/posts/${post._id}`} class="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>
       
    </div>
  </div>
  </div>
                    
                  </div>
          );
        })
      ) : (
        <Loading />
      )}
      
    </>
  );
}

export default Posts;
