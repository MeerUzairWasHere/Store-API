# Store-API

This Git repository houses the source code for an API project designed to handle product filtering and retrieval. The API provides endpoints for retrieving products with various filters and sorting options. It is built using Node.js and Express, with data storage likely managed by a database system such as MongoDB. The primary functionality of the API includes filtering products based on parameters like featured status, company, price range, product name, and numeric filters on fields like price and rating. It also supports sorting and pagination.

## Filter Endpoints:

GET /api/products - Retrieve all products with optional filters and sorting.

Query Parameters:

featured (boolean): Filter products by featured status (true or false).

company (string): Filter products by company name.

price (number): Filter products by a specific price.

name (string): Filter products by name using a case-insensitive regex.

numericFilters (string): Filter numeric fields (price and rating) using operators. The format is field-operator-value, e.g., "price>=50,rating>4".

sort (string): Sort products based on specified fields. Comma-separated list of fields. For ascending order, use field, and for descending order, use -field. Example: "price,-rating".

field (string): Specify the fields to be returned in the result. Comma-separated list of fields.

page (number): Pagination - page number (default is 1).

limit (number): Pagination - number of items per page (default is 10).

## Response:

Status 200 (OK)

JSON response with the following fields:

success (boolean): Indicates the success of the request.

totalProducts (number): Total number of products matching the filters.

products (array): Array of product objects that meet the criteria.

This API allows clients to filter and retrieve product data based on various criteria and provides sorting and pagination options for flexibility in querying the product catalog.
