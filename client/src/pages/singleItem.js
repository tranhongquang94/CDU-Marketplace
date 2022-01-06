import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Hero, Searchbar } from "../components/general";
import {ItemDesc, Thumbnail} from "../components/specific/SingleItem";
import axios from "axios";

function SingleItem({
  heroCover,
  searchCategories,
  closedDropDown,
  setClosedDropDown,
  isLoggedIn
}) {
  // Access the URL params by react router hook.
  const [itemData, setItemData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/item/display/${id}`)
      .then((res) => {
        if (res.data) {
          setItemData(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <Hero page="homepage" cover={heroCover} isLoggedIn={isLoggedIn} />
      <Searchbar
        page="homepage"
        searchCategories={searchCategories}
        closedDropDown={closedDropDown}
        setClosedDropDown={setClosedDropDown}
      />
      <div className="SingleItem-container">
        <Thumbnail thumb={itemData.thumbnail} altText={itemData.name} />
        <ItemDesc
          name={itemData.name}
          price={itemData.price}
          location={itemData.location}
          createdAt={itemData.createdAt}
          description={itemData.description}
          postedBy= {itemData.postedBy}
        />
      </div>
    </>
  );
}

export default SingleItem;
