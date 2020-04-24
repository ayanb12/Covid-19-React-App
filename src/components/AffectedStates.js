import React from "react";

export const AffectedStates = ({ obj }) => {
  console.log(obj);
  return (
    <>
      {obj.hasOwnProperty("noData") ? (
        <tr className="error-card">
          <td className="error-heading">{obj.noData}</td>
        </tr>
      ) : (
        <tr>
          <td>{obj.name}</td>
          <td>{obj.lastUpdate}</td>
          <td>{obj.confirmed}</td>
          <td>{obj.deaths}</td>
        </tr>
      )}
    </>
  );
};
