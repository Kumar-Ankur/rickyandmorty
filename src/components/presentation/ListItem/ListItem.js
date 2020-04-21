import React from "react";
import "./ListItem.scss";
import { getCreatedYear } from "../../../utils";
import * as constants from "../../../constants";

const ListItem = (props) => {
  const { item, indx } = props;
  return (
    <div key={indx} className="flex-item">
      <div className="flex-item_container">
        <img
          src={item.image}
          alt={item.name}
          className="flex-item_container-img"
        />
        <div className="flex-item_container-intro">
          <div className="flex-item_container-name">{item.name} </div>
          <div className="flex-item_container-creation">
            {`Id: ${item.id} - created ${getCreatedYear(
              item.created
            )} years ago`}{" "}
          </div>
        </div>

        <div className="flex-item_container-detail">
          <div className="flex-item_container-detail-status">
            <div className="flex-item_container-detail-title">
              {constants.STATUS_LIST}
            </div>
            <div className="flex-item_container-detail-value">
              {item.status}
            </div>
          </div>

          <div className="flex-item_container-detail-species">
            <div className="flex-item_container-detail-title">
              {constants.SPECIES_LIST}
            </div>
            <div className="flex-item_container-detail-value">
              {item.species}
            </div>
          </div>

          <div className="flex-item_container-detail-gender">
            <div className="flex-item_container-detail-title">
              {constants.GENDER_LIST}
            </div>
            <div className="flex-item_container-detail-value">
              {item.gender}
            </div>
          </div>

          <div className="flex-item_container-detail-origin">
            <div className="flex-item_container-detail-title">
              {constants.ORIGIN_LIST}
            </div>
            <div className="flex-item_container-detail-value">
              {item.origin.name}
            </div>
          </div>

          <div className="flex-item_container-detail-location">
            <div className="flex-item_container-detail-title">
              {constants.LOCATION_LIST}
            </div>
            <div className="flex-item_container-detail-value">
              {item.location.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
