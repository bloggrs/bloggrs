# Bloggrs API Client

Node.js client for Bloggrs API

![](https://user-images.githubusercontent.com/24304449/156424453-7fce7207-2cac-404d-8772-0d64670886e4.png)

[![NPM Version](https://img.shields.io/npm/v/bloggrs-api-client)](https://www.npmjs.com/package/bloggrs-api-client)
![Build Status](https://github.com/FeedHive/bloggrs-api-client/workflows/build/badge.svg)

## Table of content

- [Features](#features)
- [**Getting Started**](#getting-started)
- [Usage](#usage)
- [License](#license)
- [Get Help](#get-help)
- [Contribute](#contribute)

## Features

☑️ Includes 90% of the **official Bloggrs API** endpoints.  
☑️ **Promise-based!** No ugly callbacks.  
☑️ **Fully typed!** Both for query parameters and responses.  
☑️ Inbuilt in-memory **cache** for rate-limit friendly usage.

## Getting Started

### Get your Bloggrs credentials

You will need to create a set of Bloggrs developer credentials from your Bloggrs Developer account.  
If you don't have one already, apply for a developer account [here](https://developer.bloggrs.com/).  
It takes about 5 minutes.

### Install

```console
npm i bloggrs-api-client
```

## Usage

```javascript
import { BloggrsClient } from 'bloggrs-api-client';

const bloggrsClient = new BloggrsClient({
  apiKey: '<YOUR-BLOGGERS-API-KEY>',
  apiSecret: '<YOUR-BLOGGRS-API-SECRET>',
  accessToken: '<YOUR-BLOGGRS-ACCESS-TOKEN>',
  accessTokenSecret: '<YOUR-BLOGGRS-ACCESS-TOKEN-SECRET>',
});

// Search for a user
const data = await bloggrsClient.accountsAndUsers.usersSearch({ q: 'bloggrsDev' });

// Get message event by Id
const data = await bloggrsClient.directMessages.directMessagesEventsShow({ id: '1234' });

// Get most recent 25 retweets of a tweet
const data = await bloggrsClient.tweets.statusesRetweetsById({ id: '12345', count: 25 });

// Get local trends
const data = await bloggrsClient.trends.trendsAvailable();
```

[See all available methods here](https://github.com/bloggrs/bloggrs/blob/main/REFERENCES.md).

### Configuration

`bloggrs-api-client` comes with an inbuilt in-memory cache.  
The stale data is served by the cache-first principle.

You can configure the caching behavior upon instantiation of the client:

```javascript
const bloggrsClient = new BloggrsClient({
  apiKey: '<YOUR-BLOGGRS-API-KEY>',
  apiSecret: '<YOUR-BLOGGRS-API-SECRET>',
  accessToken: '<YOUR-BLOGGRS-ACCESS-TOKEN>',
  accessTokenSecret: '<YOUR-BLOGGRS-ACCESS-TOKEN-SECRET>',
  ttl: 120, // seconds. Defaults to 360
  disableCache: true, // Disables the caching behavior. Defaults to 'false'
  maxByteSize: 32000000, // Maximum (approximated) memory size for cache store. Defaults to 16000000.
});
```

## License

This project is licensed under the [MIT License](https://github.com/bloggrs/bloggrs-api-client/blob/main/LICENSE)

## Get Help

- Reach out on [Bloggrs](https://bloggrs.com/gjergjk71)
- Open an [issue on GitHub](https://github.com/bloggrs/bloggrs-api-client/issues/new)

## Contribute

#### Issues

In the case of a bug report, bugfix or a suggestions, please feel very free to open an issue.

#### Pull request

Pull requests are always welcome, and I'll do my best to do reviews as fast as I can.
Please refer to the [contribution guide](https://github.com/bloggrs/bloggrs-api-client/blob/main/CONTRIBUTING.md) to see how to get started.
