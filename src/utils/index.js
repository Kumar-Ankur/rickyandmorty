/**
 * @function getCreatedYear
 * @param { Date } createdDate - Creation Date of Item
 * @returns { Number } - return difference of year between the present date and the creation date of item.
 */
export const getCreatedYear = (createdDate) => {
  const createdYear = new Date(createdDate).getFullYear();
  const presentYear = new Date().getFullYear();
  return presentYear - createdYear;
};

/**
 * 
 * @param { Array } charcters - All data fetched from API as array of object.
 * @param { String } data - Get filtered data title viz: gender, species, origin
 * @param { Boolean } isOrigin - check if data is coming from origin return true else false
 * @returns - return new array with no deuplicate data based on data param and isOrigin param
 */
export const getCheckBoxData = (charcters, data, isOrigin = false) => {
  let checkBoxData = [];
  charcters.map((item) => {
    checkBoxData.push(isOrigin ? item[data].name : item[data]);
    return checkBoxData;
  });

  return [...new Set(checkBoxData)];
};

/**
 * @function getFilteredData 
 * @param { Object } event - window event when user try to search/filter data.
 * @param { Function } addFilteredData - function to add the data in filter state
 * @param { Function} removeFilteredData - function to remove the data from filter state.
 */
export const getFilteredData = (event, addFilteredData, removeFilteredData) => {
  if (event.target.checked) {
    addFilteredData(event.target.value);
  } else {
    removeFilteredData(event.target.value);
  }
};
