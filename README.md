# countries-url

This returns countries with the follwoing properties:

- URLs
- FIPs code
- ISO code
- Country name

# API

**getUrlIso2**

This returns the URL of a country based on the ISO2 code.

```js
const { getUrlIso2 } = require("countries-url");

getUrlIso2("VN");
// vietnam
```
