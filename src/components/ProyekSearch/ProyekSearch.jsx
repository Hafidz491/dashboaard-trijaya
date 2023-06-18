import React from "react";
import PropTypes from "prop-types";

function ProyekSearch({ keyword, keywordChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari Proyek..."
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

ProyekSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default ProyekSearch;
