# Auth-API using Node.js
Deployed on heroku: https://quiet-coast-34295.herokuapp.com/
## 1. REGISTER
METHOD: POST , REQUEST FORMAT: JSON , URL: /api/register  
  
FORMAT:  
```
{  
"name": "String",  
"userName": "String",  
"password": "String",  
"year": "Number",  
"branch": "String",  
"gender": "String",  
"address": "String",  
"email": "String",  
"phoneNo": "Number"  
}  

```
EXAMPLE:  
```
{  
"name": "John",  
"userName": "john123",  
"password": "john123",  
"year": "2",  
"branch": "cse",  
"gender": "male",  
"address": "qw",  
"email": "john@gmail.com",  
"phoneNo": "123456789"  
}  
```
RESPONSE:  
```
{  
"msg": "User successfully signed up."  
}  
```
- A COOKIE named **info** is generated containing the JWT , save it for later use.  
  
EXAMPLE:   
```
info=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA4ZmVlOTZkZGM0ZDY4YTgxNDY2OGMiLCJpYXQiOjE2NDQ3NTY3MTMsImV4cCI6MTY0ODM1NjcxM30.Dli3bwgwC0Bm4rHmFh8ZpN16j8mkzY0Npn4Z0a4KbW4; Path=/; Secure; HttpOnly;  
```
- OTP is sent to the user's email address.  
## 2. OTP
METHOD: GET , URL: /api/register/otp  
- Send the COOKIE named **info** in the header.  
  
RESPONSE: EXAMPLE  
```
2450       //OTP sent to the user's email address.
```
## 3. OTP Verification  
METHOD: PUT ,  REQUEST FORMAT: JSON , URL: /api/register/otp/verify 
- Send the COOKIE named **info** in the header.  
   
FORMAT:  
```
{  
"isVerified": "Boolean"    
}  

```
EXAMPLE:  
```
{  
  "isVerified": "true"  
}  
```
RESPONSE:  
```
{  
    "msg": "Database updated to: User is verified"  
}  
```
## 4. Homepage
METHOD: GET , URL: /api/home  
- Send the COOKIE named **info** in the header.  
  
RESPONSE:  
```
{
    "msg": "You are verified so you can access this page."
}  
```
## 5. Logout
METHOD: DELETE , URL: /api/home/logout  
- Send the COOKIE named **info** in the header.  
  
RESPONSE:  
```
{
    "msg": "Cookie cleared"
} 
```
