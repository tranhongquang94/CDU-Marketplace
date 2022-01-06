import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {data} from "../../data/data";

function FeatureCategories() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchCategory = category => {
      axios
        .post("/item/getnumberads", {
          category: category
        })
        .then((res) => {
          setCategoryList(prevState => prevState.concat(res.data));
        })
        .catch((error) => console.log(error));
    };

    data.featureCategories?.forEach(category => {
      fetchCategory(category.name);
    })
  },[]);
  
  return (
    <section className="feature-cateogies-container">
      <h2 className="section-title">Feature Categories</h2>
      <div className="categories-container">
        {
          categoryList?.map((category) => {
            let {_id, name, thumbnail, count} = category;
            name = name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <div className="category" key={_id}>
                <a href={`/${name.toLowerCase()}`}>
                  <img src={thumbnail} alt="category-thumbnail" />
                  <div className="category-desc">
                    <span className="title">{name}</span>
                    <span className="numAds"> {count} Ads</span>
                  </div>
                </a>
              </div>
            );
          })
        }
      </div>
    </section>
  )
}

export default FeatureCategories;
