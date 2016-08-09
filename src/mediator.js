'use strict';

const mediator = {};

mediator.subscribe = function subscribe(topic, callback) {
  if (!this.hasOwnProperty(topic)) {
    this[topic] = [];
  }

  this[topic].push(callback);
  return true;
};

mediator.unsubscribe = function unsubscribe(topic, callback) {
  if (!this.hasOwnProperty(topic)) {
    return false;
  }

  for (let i = 0, len = this[topic].length; i < len; i++) {
    if (this[topic][i] === callback) {
      this[topic].splice(i, 1);
      return true;
    }
  }

  return false;
};

mediator.publish = function publish(...args) {
  const topic = args.shift();

  if (! this.hasOwnProperty(topic)) {
    return false;
  }

  for (let i = 0, len = this[topic].length; i < len; i++) {
    this[topic][i].apply(undefined, args);
  }

  return true;
};

export default mediator;
