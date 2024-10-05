const openApiSpec = {
    "openapi": "3.0.0",
    "info": {
      "title": "Store API",
      "description": "An API to fetch products from the store, with filtering, sorting, and pagination features.",
      "version": "1.1.0",
      "contact": {
        "name": "Mir Uzair Bashir",
        "email": "meer.uxair007@gmail.com"
      }
    },
    "servers": [
      {
        "url": "https://store-api-meeruzairwashere.onrender.com",
        "description": "Live server"
      },
      {
        "url": "http://localhost:3000",
        "description": "Local development server"
      },
    ],
    "paths": {
      "/api/v1/products": {
        "get": {
          "summary": "Get all products",
          "description": "Retrieve a list of products with optional filters, sorting, and pagination.",
          "tags": [
            "Products"
          ],
          "parameters": [
            {
              "in": "query",
              "name": "featured",
              "schema": {
                "type": "boolean"
              },
              "description": "Filter products by featured status",
              "example": true
            },
            {
              "in": "query",
              "name": "company",
              "schema": {
                "type": "string"
              },
              "description": "Filter products by company",
              "example": "ikea"
            },
            {
              "in": "query",
              "name": "price",
              "schema": {
                "type": "number"
              },
              "description": "Filter products by exact price",
              "example": 50
            },
            {
              "in": "query",
              "name": "name",
              "schema": {
                "type": "string"
              },
              "description": "Search products by name (case-insensitive)",
              "example": "table"
            },
            {
              "in": "query",
              "name": "numericFilters",
              "schema": {
                "type": "string"
              },
              "description": "Filter products by numeric fields like price or rating using comparison operators.",
              "example": "price>30,rating>=4.5"
            },
            {
              "in": "query",
              "name": "sort",
              "schema": {
                "type": "string"
              },
              "description": "Sort products by field names, comma-separated (use '-' for descending order)",
              "example": "price,-name"
            },
            {
              "in": "query",
              "name": "field",
              "schema": {
                "type": "string"
              },
              "description": "Limit the fields returned in the response, comma-separated",
              "example": "name,price,rating"
            },
            {
              "in": "query",
              "name": "page",
              "schema": {
                "type": "integer",
                "description": "Page number for pagination",
                "example": 2
              }
            },
            {
              "in": "query",
              "name": "limit",
              "schema": {
                "type": "integer",
                "description": "Limit the number of products per page (pagination)",
                "example": 10
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A list of products based on query parameters",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "success": {
                        "type": "boolean",
                        "example": true
                      },
                      "totalProducts": {
                        "type": "integer",
                        "example": 3
                      },
                      "products": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/Product"
                        }
                      }
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Server Error"
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Product": {
          "type": "object",
          "properties": {
            "_id": {
              "type": "string",
              "example": "60a6f9b5b6e4a928dcb34b5a"
            },
            "name": {
              "type": "string",
              "example": "Wooden Table"
            },
            "price": {
              "type": "number",
              "example": 49.99
            },
            "featured": {
              "type": "boolean",
              "example": true
            },
            "rating": {
              "type": "number",
              "example": 4.5
            },
            "CreatedAt": {
              "type": "string",
              "format": "date-time",
              "example": "2024-01-02T12:34:56.000Z"
            },
            "company": {
              "type": "string",
              "example": "ikea"
            }
          }
        }
      }
    },
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    }
  }

  module.exports = { openApiSpec };
