import React from "react";
import { useSearchParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import WorkCard from "../../components/WorkCard/WorkCard";
import ProyekSearch from "../../components/ProyekSearch/ProyekSearch";

import "./style.css";

function FinishedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || "";

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <FinishedPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class FinishedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    return (
      <div className="container-dashboard">
        <div className="navigation">
          <Sidebar />
        </div>
        <div className="body-section">
          <div className="navbar-body">
            <div className="title-navbar">
              <h3>Proyek Terselesaikan</h3>
            </div>
            <ProyekSearch
              keyword={this.state.keyword}
              keywordChange={this.onKeywordChangeHandler}
            />
          </div>
          <div className="work-body">
            <WorkCard />
          </div>
        </div>
      </div>
    );
  }
}

export default FinishedPageWrapper;
