import React from "react";
import { Link } from "react-router-dom";

export const AffectedStates = ({ obj, dayNumber }) => {
  console.log(obj);
  return (
    <>
      {obj.hasOwnProperty("noData") ? (
        <div className="card error-card">
          <span className="error-heading">{obj.noData}</span>
        </div>
      ) : (
        <div className="card">
          <div>
            <i className="fas fa-circle"></i>
            <span className="state-name">
              Day-{dayNumber}, {obj.lastUpdate}
            </span>
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
      )}
    </>
  );
};
