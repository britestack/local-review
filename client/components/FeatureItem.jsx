import React from "react";

const FeatureItem = (props) => {
  return (
    <>
      {
        props.items.map((item, i) => {
          return (
            <div key={i}>
              <span><i className="far fa-thumbs-up"></i> 97%</span>
              <span><i className="fas fa-paw"></i></span>
              {item.name}
            </div>
          )
        })
      }
    </>
  );
}

export default FeatureItem;