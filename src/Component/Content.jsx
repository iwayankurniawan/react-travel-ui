import React from 'react';
import "../Style/content.css";
import content1 from "../Style/iceland14.JPG";
import content2 from "../Style/iceland22.JPG";

function Content() {
  return (
    <div className="content-background" id="content">
        <div className="content-container">
            <img className="content-image" src={content1}/>
            <h1 className="content-title">Lorem</h1>
            <p className="content-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur maxime porro alias, cumque repellendus libero perspiciatis inventore qui deserunt eius et neque reprehenderit, quasi iste rerum quod molestiae minus accusamus.</p>
        </div>
    
        <div className="content-container">
            <img className="content-image" src={content2}/>
            <h1 className="content-title">Lorem</h1>
            <p className="content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas cum voluptate neque sit, eaque, possimus assumenda earum minima porro obcaecati ab sapiente aliquam nihil, quibusdam expedita tenetur! Optio, tempora?</p>
        </div>
    </div>
  );
}

export default Content;
