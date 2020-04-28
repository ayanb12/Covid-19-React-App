import React from "react";
import CountUp from "react-countup";

export const AffectedStates = ({ obj }) => {
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
          <CountUp delay={0} start={0} end={obj.confirmed}>
            {({ countUpRef }) => <td ref={countUpRef}>{""}</td>}
          </CountUp>
          <CountUp delay={0} start={0} end={obj.deaths}>
            {({ countUpRef }) => <td ref={countUpRef}>{""}</td>}
          </CountUp>
        </tr>
      )}
    </>
  );
};
