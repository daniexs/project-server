
## Endpoints

List of Available Endpoints:
- `POST /user/register`
- `POST /user/login`
- `GET /products`
- `GET /products/:id`


Endpoin under authenthication Customer
- `POST /upload/upload-multiple`
- `GET /cart/get`
- `POST /cart/add`
- `POST /products/add`
- `POST /midtrans/`



- `POST /google-login`
- `PUT /products/:id`




### POST /user/register
#### Description
- Create a new user

#### Request
- Body
    ```json
    {
        "username": "string",
        "email":"string",
        "password": "string",
    }
    ```
#### Response
_201 - Created_
- Body
    ```json
    {
      "id": "Id",
      "email": "String"
    }
    ```

_400 - Bad Request_
- Body
    ```json
    {
        "message": "Email must be unique"
    }
    {
        "message": "Email is required"
    }
    {
        "message": "Password is required"
    }
    {
        "message": "Invalid email format"
    }
    ```
### POST /user/login
#### Description
- Cheked input user data (login)

#### Request
- Body
    ```json
    {
        "email":"string",
        "password": "string"
    }
    ```
#### Response
_200 - OK_
- Body
    ```json
    {
      "access_token": "String" 
    }
    ```

_401 - Unauthorized_
- Body
    ```json
    {
        "message": "Invalid email/password"
    }
    ```

### POST /cust/google-login
#### Description
- Cheked input user data (login)

#### Request
- Body
    ```json
    {
        "google_token":"string"
    }
    ```
#### Response
_200 - OK_
- Body
    ```json
    {
      "token": "String" 
    }
    ```

### GET /products
#### Description
- Get all the products data

#### Request
- Body
    ```json
    {
        "access_token":"string"
    }
    ```
#### Response
_200 - OK_

- Body
    ```json
    [
      {
          "id": "Integer",
          "name": "String",
          "description": "String",
          "price": "Integer",
          "stock": "Integer",
          "imgUrl": "String",
          "category": "String",
          "UserId": "Integer",
          "createdAt": "Date",
          "updatedAt": "Date"
      }
    ]
    ```
### GET /products/:id
#### Description
- Get selected the products data by given id

#### Request
- params:
```json
    {
      "Id": "integer"
    }
```
- query:
```json
    {
      "filter": "string"
    }
```
```json
    {
      "filter": "string"
    }
```
```json
    {
      "page": "integer"
    }
```

#### Response
_200 - OK_

- Body
    ```json
    {
        
          "id": "Integer",
          "name": "String",
          "description": "String",
          "price": "Integer",
          "stock": "Integer",
          "imgUrl": "String",
          "category": "String",
          "UserId": "Integer",
          "createdAt": "Date",
          "updatedAt": "Date"
      
    }
    ```

### GET /upload/upload-multiple
#### Description
- Get all upload

#### Request
- Body
    ```json
    {
        "access_token":"string"
    }
    {
        "files":"file"
    }
    ```


#### Response
_200 - OK_

- Body
    ```json
  [
      {
          "fieldname": "string",
          "originalname": "string",
          "encoding": "string",
          "mimetype": "string",
          "size": "integer",
          "bucket": "string",
          "key": "string",
          "acl": "string",
          "contentType": "string",
          "contentDisposition": null,
          "contentEncoding": null,
          "storageClass": "string",
          "serverSideEncryption": null,
          "location": "string",
          "etag": "string"
      }
  ]
    ```

### GET /cart/get
#### Description
- Get all data bookmare

#### Request
- Body
    ```json
    {
        "access_token":"string"
    }
    ```
#### Response
_200 - OK_
- Body
    ```json
    [
      {
        "id": "integer",
        "UserId": "integer",
        "ProductId": "integer",
        "createdAt": "date",
        "updatedAt": "date",
        "Product": {
            "id": "Integer",
            "name": "String",
            "description": "String",
            "price": "Integer",
            "stock": "Integer",
            "imgUrl": "String",
            "category": "String",
            "UserId": "Integer",
            "createdAt": "Date",
            "updatedAt": "Date"
        }
      }
    ]
  
    ```


### POST /cart/add
#### Description
- Get all data wishlist

#### Request
- Body
    ```json
    {
        "access_token":"string"
    }
    ```
```json
    {
      "ProductId": "integer"
    }
```
#### Response
_201 -  CREATED_
- Body
    ```json
  {
    "id": "integer",
    "ProductId": "integer",
    "UserId": "integer",
    "updatedAt": "date",
    "createdAt": "date"
  }
  
    ```


### POST /midtrans/
#### Description
- Get all data wishlist

#### Request
- Body
    ```json
    {
        "access_token":"string"
    }
    ```
```json
    {
      "total": "integer"
    }
```
#### Response
_201 -  CREATED_
- Body
    ```json
  {
    "token":"string"
  }
  
    ```








### Global Error
#### Response
_500 - Internal Server Error_
- Body
    ```json
    {
      "statusCode": 500,
      "error": {
        "message": "Internal Server Error"
      }
    }
    ```message = "Invalid Token"
_401 - Invalid Token_
- Body
    ```json
    {
        "message": "Invalid Token"
    }
    ```
