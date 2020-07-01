import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";

const PaginationComponent = ({ pagesTotal }) => {
  const history = useHistory();

  const handleChange = (e, page) => {
    history.push(`${page}`);
  };

  return <Pagination count={pagesTotal} onChange={handleChange} size="large" />;
};

export default PaginationComponent;
