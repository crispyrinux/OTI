GET : Get flight data
http://localhost:3000/api/flights
This is a GET request and it is used to "get" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have id=1).
A successful GET response will have a 200 OK status, and should include some kind of response body - for example, HTML web content or JSON data.

Authorization JWT Bearer
Request Headers =>
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hb


GET : Get pasengger data
http://localhost:3000/api/pasengger
This is a GET request and it is used to "get" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have id=1).
A successful GET response will have a 200 OK status, and should include some kind of response body - for example, HTML web content or JSON data.

﻿Request Headers
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hb


POST : Post flight data
http://localhost:3000/api/flights
This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.
A successful POST request typically returns a 200 OK or 201 Created response code.

Request Headers
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbW

example body =>
{
        "flight_code": 100,
        "origin": "Padang",
        "destination": "Yogyakarta",
        "price_idr": 1750000
    }

POST : Post pasengger data
http://localhost:3000/api/flights
This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.
A successful POST request typically returns a 200 OK or 201 Created response code.

﻿Request Headers
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5h

  example body =>
{
        "flight_code": 100,
        "origin": "Padang",
        "destination": "Yogyakarta",
        "price_idr": 1750000
    }


PUT : Update flight data
http://localhost:3000/api/flights/1
This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. id=1).
A successful PUT request typically returns a 200 OK, 201 Created, or 204 No Content response code.

Request Headers
Authorization :Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJoYW1tYW15YXppZHVodXl5IiwiaWF0IjoxNzMxODUyOTk1LCJleHAiOjE3MzE4NTY1OTV9.SYM3X4qPy2FjiJjn00DxZQKQAeeIi8l9NH0vpAReK1o

example body =>
{
        "flight_code": 100,
        "origin": "Padang",
        "destination": "Yogyakarta",
        "price_idr": 1750000
    }

    
PUT : Update pasengger data.
http://localhost:3000/api/flights/1
This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. id=1).
A successful PUT request typically returns a 200 OK, 201 Created, or 204 No Content response code.

﻿
Request Headers
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5h



DELETE : Delete flight data
http://localhost:3000/api/flights
This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. id=1).

A successful DELETE request typically returns a 200 OK, 202 Accepted, or 204 No Content response code.

Request Headers 
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJoYW1tYW15YXppZHVodXl5IiwiaWF0IjoxNzMxODUyOTk1LCJleHAiOjE3MzE4NTY1OTV9.SYM3X4qPy2FjiJjn00DxZQKQAeeIi8l9NH0vpAReK1o



DELETE : Delete pasengger data
http://localhost:3000/api/flights
This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. id=1).

A successful DELETE request typically returns a 200 OK, 202 Accepted, or 204 No Content response code.

Request Headers
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbW


POST : Login req
http://localhost:3000/api/auth/login
This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.

A successful POST request typically returns a 200 OK or 201 Created response code.

example body {
    "username" : "hammamyaziduhuyy",
    "password" : "admin123"
}



POST : Regist req
http://localhost:3000/api/auth/register
This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.

A successful POST request typically returns a 200 OK or 201 Created response code.

﻿{
    "username" : "hammamyaziduhuyy",
    "password" : "admin123"
}

