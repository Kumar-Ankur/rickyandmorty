import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../../actions";
import * as constants from "../../../constants";
import Accordion from "../../presentation/Accordion/Accordion";
import SortButton from "../SortButton/SortButton";
import SpeciesView from "../SpeciesView/SpeciesView";
import GenderView from "../GenderView/GenderView";
import OriginView from "../OriginView/OriginView";
import SearchView from "../SearchView/SearchView";
import ListItems from "../../presentation/ListItems/ListItems";
import Footer from "../../presentation/Footer/Footer";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    // dispatch action to get data from API
    this.props.getCharacters();
  }

/**
 * @function getSearchData
 * @param { Object } filteredOriginItem
 * @description - function to filtered out data based on search text
 * @returns { Object } - return the filtered data based on search text by user
 */
  getSearchData = (filteredOriginItem) => {
    const { search_text } = this.props;
    let filteredSearchItem =
      search_text.length > 0
        ? filteredOriginItem.filter((item) => {
            return item.name.toLowerCase().includes(search_text.toLowerCase());
          })
        : filteredOriginItem;

    return filteredSearchItem;
  };

/**
 * @function getOriginFilter
 * @param { Object } filteredGenderItem
 * @description - function to filtered out data based on origin 
 * @returns { Object } - return the filtered data based on Origin value
 */
  getOriginFilter = (filteredGenderItem) => {
    const { filter_origin_data } = this.props;
    const filteredOriginItem =
      filter_origin_data.length > 0
        ? filteredGenderItem.filter((item) => {
            return filter_origin_data.indexOf(item.origin.name) >= 0;
          })
        : filteredGenderItem;

    return this.getSearchData(filteredOriginItem);
  };

/**
 * @function getGenderFilter
 * @param { Object } filteredItem
 * @description - function to filtered out data based on gender 
 * @returns { Object } - return the filtered data based on gender value
 */
  getGenderFilter = (filteredItem) => {
    const { filter_gender_data } = this.props;
    let filteredGenderItem =
      filter_gender_data.length > 0
        ? filteredItem.filter((item) => {
            return filter_gender_data.indexOf(item.gender) >= 0;
          })
        : filteredItem;

    return this.getOriginFilter(filteredGenderItem);
  };

/**
 * @function getSpeciesFilter
 * @param { Object } all_characters
 * @param { Array } filter_data
 * @description - function to filtered out data based on species 
 * @returns { Object } - return the filtered data based on species value
 */
  getSpeciesFilter = (all_characters, filter_data) => {
    let filteredItem =
      filter_data.length > 0
        ? all_characters.filter((item) => {
            return filter_data.indexOf(item.species) >= 0;
          })
        : all_characters;

    return this.getGenderFilter(filteredItem);
  };

/**
 * @function getFilteredItem
 * @description - function to return final filtered data based on species, origin, gender and search text.
 */
  getFilteredItem = () => {
    const { all_characters, filter_data } = this.props;
    return this.getSpeciesFilter(all_characters, filter_data);
  };

  render() {
    let filteredItem = this.getFilteredItem();

    return (
      <div className="main">
        <div className="main_heading">{constants.APP_HEADING}</div>
        <div className="sortBox">
          <SortButton />
        </div>
        <div className="main_functionality">
          <div className="main_functionality-species">
            <Accordion
              title={ constants.ACCORDION_TEXT}
              content={[<SpeciesView />, <GenderView />, <OriginView />]}
            />
          </div>
        </div>

        <div className="main_input">
          <SearchView />
        </div>

        <div className="viewcontent">
          <ListItems filteredItem={filteredItem} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    all_characters: state.all_characters,
    filter_data: state.filter_data,
    filter_gender_data: state.filter_gender_data,
    filter_origin_data: state.filter_origin_data,
    search_text: state.search_text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => dispatch(actionCreator.getCharacters()),
    sortAscendingById: () => dispatch(actionCreator.sortAscendingById()),
    sortDescendingById: () => dispatch(actionCreator.sortDescendingById()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
