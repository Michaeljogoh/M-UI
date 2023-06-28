import React from 'react'
import image from './image/wallpaperflare.com_wallpaper_2_apgs0f.jpg'




function Carousel() {
  return (
    <>
  
  <div class="p-4 p-md-5 mb-4" style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",  backgroundSize:"cover" }}>
        <div class="col-md-6 px-0">
          <h1 class="display-4 fst-italic text-white">
            Title of a longer featured blog post
          </h1>
          <p class="lead my-3 text-white">
            {/* Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s */}
            Looking for a freelance content writer that engages your audience and helps you rank well?
            contents.
          </p>
          <p class="lead mb-0">
          <button class="btn btn-danger btn-lg px-4 rounded-pill fw-bold" type="button">
        Services!
      </button>
          </p>
        </div>
      </div>


    </>
  )
}

export default Carousel