import countries from "./countries";
import { Country, CountryCode } from "./types";

/**
 *
 * @param countryCode - ISO-3166 alpha2
 * @returns URL
 */
export function getUrlIso2(countryCode: CountryCode): string | undefined {
  // `https://restcountries.eu/rest/v2/name/${country}`;
  return countries.find((country: Country) => country.code === countryCode)
    ?.url;
}

/**
 *
 * @param countryCode - ISO-3166 alpha2
 * @returns Country
 */
export function getCountry(countryCode: CountryCode): Country | undefined {
  return (
    countries.find((country: Country) => country.code === countryCode) ||
    undefined
  );
}

/*export function getUrlIso3(countryCode: CountryCode): string | undefined {
  // `https://restcountries.eu/rest/v2/alpha/${country}`;
  return countries.find((country: Country) => country.code === countryCode)
    ?.url;
}*/

/**
 *
 * @returns Array of Countries
 */
export function getCountries() {
  return countries;
}
