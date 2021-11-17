export type Country = {
  name: string;
  code: string;
  url: string;
  region: string;
  fipsCode: string;
};

export type CountryCode = string;
export type getUrl = (countryCode: CountryCode) => string;

export type Countries = Country[];
