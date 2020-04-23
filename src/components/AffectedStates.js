import React from "react";
import { Link } from "react-router-dom";

export const AffectedStates = ({ obj }) => {
  console.log(obj);
  return (
    <div className="card">
      <div>
        <i className="fas fa-circle"></i>
        <span className="state-name">{obj.lastUpdate}</span>
      </div>

      <div>
        <span className="state-info">Confirmed</span>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
      <Link to="#" className="btn-primary">
        {obj.confirmed}
      </Link>

      <div>
        <span className="state-info">Deaths</span>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
      <Link to="#" className="btn-primary">
        {obj.deaths}
      </Link>
    </div>
  );
};
