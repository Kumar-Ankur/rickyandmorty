import { getCreatedYear, getCheckBoxData, getFilteredData } from "./";

describe("test utility function", () => {
  test("check getCreatedYear function working without error", () => {
    const createdDate = "2017-11-04T18:48:46.250Z";
    const createdYear = new Date(createdDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const yearDiff = currentYear - createdYear;
    expect(getCreatedYear(createdDate)).toBe(yearDiff);
  });

  test("check getFilteredData working without error if target checked", () => {
    const event = { target: { checked: true, value: "test" } };
    const addFilteredData = jest.fn();
    const removeFilteredData = jest.fn();
    const output = getFilteredData(event, addFilteredData, removeFilteredData);
    expect(output).toBeTruthy();
  });

  test("check getFilteredData working without error if target not checked", () => {
    const event = { target: { checked: false, value: "test" } };
    const addFilteredData = jest.fn();
    const removeFilteredData = jest.fn();
    const output = getFilteredData(event, addFilteredData, removeFilteredData);
    expect(output).not.toBeTruthy();
  });

  test("check getCheckBoxData working without issue", () => {
    const characters = [
      {
        species: "Human",
      },
      {
        species: "Alien",
      },
      {
        species: "Human",
      },
    ];
    const data = "species";
    const output = getCheckBoxData(characters, data);
    expect(output.length).toBe(2);
  });
});
