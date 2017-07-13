# Mediator
A module for implementing a mediator pattern.

## Usage
```
import mediator from 'PATH_TO_MODULE';

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
