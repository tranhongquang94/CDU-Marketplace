import React, { useState } from "react";
import { Hero, Searchbar } from "../components/general";
import { PopularCategories } from "../components/specific/jobs";
import axios from "axios";
import {data} from "../components/data/data";

function Jobs({
  heroCover,
  searchCategories,
  closedDropDown,
  setClosedDropDown,
  isLoggedIn
}) {
  const [jobList, setJobList] = useState([]);
  const [currentTabOpen, setCurrentTabOpen] = useState("");
  const { featuredJobsCategories } = data;

  const getJobList = (e) => {
    setCurrentTabOpen(e.target.textContent);

    axios.get(`/item/job/${e.target.textContent.toLowerCase()}`).then((res) => {
      if (res.data !== "No Jobs Found.") {
        setJobList(res.data);
      } else {
        setJobList("No Jobs Found for this category.");
      }
    });
  };

  return (
    <>
      <Hero page="jobs" cover={heroCover} isLoggedIn={isLoggedIn} />
      <Searchbar
        page="jobs"
        searchCategories={searchCategories}
        closedDropDown={closedDropDown}
        setClosedDropDown={setClosedDropDown}
      />
      <main>
        <PopularCategories
          jobList={jobList}
          getJobList={getJobList}
          currentTabOpen={currentTabOpen}
          featuredJobsCategories={featuredJobsCategories}
        />
      </main>
    </>
  );
}

export default Jobs;
