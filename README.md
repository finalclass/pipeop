# pipeop

Simplest pipe operator alternative (11 lines of code) with the simplest and shortest syntaxt.

## API

```js
pipe(initial:any, ...funcDefinitions:function[]|array[])
```

First argument is always an initial value. The rest argument are function definitions. A function definition can be a function or an array where the first argument is a function and the next are arguments.

## Examples

```js
function getUser() {
    return { userId: 'user-1' };
}

function addScoreToUser(user, score) {
    user.score = score;
    return user;
}

function addAgeToUser(user, age) {
    user.age = age;
    return user;
}

function makeItNice(user) {
    user.beard = true;
    return user;
}

// normally you would do this:
makeItNice(addAgeToUser(addScoreToUser(getUser(), 3), 37));

// with the pipe operator you can:
pipe(
    getUser(),
    [addScoreToUser, 3],
    [addAgeToUser, 37],
    makeItNice
);

const _ = require('underscore');

// no more _.chain()...value() with underscore/lodash
pipe(
    [1,2,3,4],
    [_.map, x => x * 2],
    [_.filter, x => x < 5]
);

// you can use async await with it as well
// promises are resolved and chained automatically
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () =>{
    pipe(
        1000,
        sleep,
        () => {
            console.log('ok1');
            return 1000;
        },
        sleep,
        () => console.log('ok2')
    );
})();

```
