import React from "react";
import { ItemList } from "../homepage";

function PopularCategories({
  jobList,
  getJobList,
  currentTabOpen,
  featuredJobsCategories,
}) {

  return (
    <section className="popular-categories">
      <h2 className="title">Popular Categories</h2>
      <ul className="job-categories-container">
        {featuredJobsCategories.map((category,idx) => {
          return (
            <li key={idx}>
              <h3
                className={`category-title ${currentTabOpen === category ? "active" : ""}`}
                onClick={getJobList}
              >
                {category}
              </h3>
            </li>
          );
        })}
      </ul>
      {jobList === "No Jobs Found for this category." ? (
        <div style={{ textAlign: "center" }}>{jobList}</div>
      ) : (
        <ItemList jobList={jobList}/>
      )}
    </section>
  );
}

export default PopularCategories;
