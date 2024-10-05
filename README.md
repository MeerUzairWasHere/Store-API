# Store-API

This repository contains a Node.js and Express API designed for product filtering and retrieval. The API allows clients to retrieve products with various query parameters, including featured status, company, price range, and name, and supports advanced numeric filters (price, rating). Additionally, the API offers flexible sorting and pagination options for efficient querying. MongoDB is used for data storage, and Express handles the request processing. Key features include customizable filters, dynamic sorting by fields, and pagination to optimize API responses. Comprehensive error handling and validation ensure API reliability and performance.

Endpoints:
- **GET /api/products**: Retrieve products with filters for featured status, company, price, name, and more.
- **Query Parameters**:
  - `featured`: Filter by featured status (`true`/`false`).
  - `company`: Filter by company name.
  - `price`: Filter by specific price.
  - `name`: Filter by product name using regex.
  - `numericFilters`: Apply filters on numeric fields (e.g., "price>=50,rating>4").
  - `sort`: Sort products by fields (e.g., "price,-rating").
  - `field`: Specify which fields to include in the response.
  - `page`: Set pagination page (default: 1).
  - `limit`: Limit the number of results per page (default: 10).

Response:
- **200 OK**: Returns a JSON object with `success`, `totalProducts`, and `products`.

This API simplifies managing and retrieving product data in e-commerce systems, offering a scalable, efficient solution for customizable queries.
