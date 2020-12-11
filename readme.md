# Async demo server

[async-demo.herokuapp.com](https://async-demo.herokuapp.com/)

## API

### Stable request
`GET /stable?maxRandom=<number>` - Get random number up to `maxRandom` or empty string.

__Examples__:

`GET /stable?maxRandom=10` - returns number from 1 to 10.

`GET /stable` - returns empty string.

### Unstable request

`GET /unstable?maxRandom=<number>&prob=<percent>&status=<error status>` - get random number up to `maxRandom` with probability of error `prob` (50% by default) with error status `error status` (random by default)

__Examples__:

`GET /unstable?maxRandom=10&prob=60&status=500` - returns number from 1 to 10 with error 500 probability 60%.

`GET /unstable?maxRandom=10&prob=70` - returns number from 1 to 10 with random error probability 70%.

`GET /unstable` - returns empty string with random error probability 50%.

### Failed request

`GET /fail?status=<error status>` - fails request with status `error status`

__Examples__:

`GET /fail?status=500` - fails with error 500.

`GET /fail` - fails with random error.

### Objects API

#### Read

`GET /objects` - return existing objects array

`GET /objects/{id}` - returns object with id `id`

#### Create

`POST /objects` - takes JSON object and creates it. returns created object with `id`.

#### Update

`PUT /objects/{id}` - takes JSON object and replaces object with id `id` with it. returns replaced object with `id`

`PATCH /objects/{id}` - takes JSON object and extends object with id `id` with it. returns extended object with `id`

#### Delete

`DELETE /objects/{id}` - deletes object with id `id` with it.

#### URL Parameters

`prob` - error probability (50% by default)
