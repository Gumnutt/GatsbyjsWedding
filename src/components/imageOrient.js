import React from "react";
import Img from "gatsby-image";

// we only care about `aspectRatio`, the rest will be passed directly to `Img`
const ImgWithOrient = ({ aspectRatio, ...props }) => {
  let orientation;
  if (aspectRatio >= 1.2) orientation = "landscape";
  if (aspectRatio <= 0.8) orientation = "portrait";
  if (aspectRatio > 0.8 && aspectRatio < 1.2) orientation = "square";
  
  

  return <div onClick={() => {
    let imgs = window.document.querySelectorAll('.image-wrapper img');
    console.log('clicked')
    for( let x = 0; x <  imgs.length; x++ ){
      imgs.item( x ).addEventListener('click', function(e) {
        let expanded = document.querySelector('.expanded')
        e = e || window.event;
        var target = e.target || e.srcElement
        if (expanded){
          expanded.classList.remove('expanded')
        }
        target.closest('.image-wrapper').classList.add('expanded')
      }, false);
    }
  }} className={`image-wrapper ${orientation}`}><Img {...props} /></div>;
};

export default ImgWithOrient;