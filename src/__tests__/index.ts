//const { getUrlIso2 } = require("../index");
import { getUrlIso2, getCountries } from "../index";

describe("Test getUrlIso2", () => {
  it("should return /nigeria", () => {
    expect(getUrlIso2("NG")).toBe("/nigeria");
  });

  it("should return /andorra", () => {
    expect(getUrlIso2("AD")).toBe("/andorra");
  });

  it("should return undefined", () => {
    expect(getUrlIso2("ADD")).toBe(undefined);
  });
});

describe("Test getCountries", () => {
  it("countries should be an array", () => {
    expect(getCountries()).toBeInstanceOf(Array);
  });
  it("A country should have 'code', 'fipsCode', 'name' properties", () => {
    const country = getCountries()[0];
    expect(country).toHaveProperty("code");
    expect(country).toHaveProperty("fipsCode");
    expect(country).toHaveProperty("name");
  });
});
