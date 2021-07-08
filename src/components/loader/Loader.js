import React from "react";
import PropTypes from "prop-types";
import Load from "react-loader-spinner";
import Button from "./button/Button";

const Loader = ({ loading, showMore, currentPage }) => {
 return (
  <>
   {currentPage ? (
    loading ? (
     <div className="loader">
      <Load
       type="Circles"
       color="#05a8df"
       height={100}
       width={100}
       timeout={1000}
      />
     </div>
    ) : (
     <Button showMore={showMore} />
    )
   ) : null}
  </>
 );
};

Loader.propTypes = {
 loading: PropTypes.bool.isRequired,
 showMore: PropTypes.func.isRequired,
 currentPage: PropTypes.number,
};

export default Loader;
