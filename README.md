# Mediator
A common js module for implementing a mediator pattern.

## Usage
```
var mediator = require('@hearst/mediator');

// Publish event
mediator.publish('event');

// Subscribe to event
mediator.subscribe('event', function() {
    // Callback
});

// Unsubscribe to event
mediator.unsubscribe('event', function() {
    // Callback
});

```

## Requirements
1. [Babel](https://babeljs.io/) or equivalent compiler to compile es6 for older browsers.
