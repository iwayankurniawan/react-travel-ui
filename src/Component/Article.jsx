import React from 'react';
import "../Style/article.css";
import article1 from "../Style/DSC02683.JPG";


function Article() {
  return (
    <div className="article-background" id="article">
       <div className="article-container">
           <h1>Read My Article</h1>
           <img className="article-image" src={article1} />
       </div>
    </div>
  );
}

export default Article;
