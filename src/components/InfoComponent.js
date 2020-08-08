import React from "react";
import { useParams } from "react-router-dom";
import DetailsComponent from "./DetailsComponent";

const InfoComponent = ({ infoId }) => {
  const type = useParams().type;
  console.log(type)
  return (
    <>
      {infoId.id &&
        (type === "movie" || type === "tv" ? (
          <>
            <DetailsComponent infoId={infoId} type={type} />
          </>
        ) : (
          <>
            <DetailsComponent infoId={infoId} type={type} />
          </>
        ))}
    </>
  );
};

export default InfoComponent;
