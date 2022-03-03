# Reference

## Basics

### `BloggrsClient.users.create(parameters)`
#### Description  
Create the specified user, return the created user and an access_token.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| first_name | true | string |
| last_name | true | string |
| email | false | string |
| password | false | string |

### `BloggrsClient.setAuthentication(parameters)`
#### Description
Authenticate a user using an access token, return's the user that belongs to the token, and a new token.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| access_token | true | string |


### `BloggrsClient.login(parameters)`
#### Description
Authenticate a user using credentials in body.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| email | true | string |
| password | true | string |

### `BloggrsClient.login(parameters)`
#### Description
Authenticate a user using credentials in body.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| email | true | string |
| password | true | string |
