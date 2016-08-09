'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mediator = {};

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

  for (var i = 0, len = this[topic].length; i < len; i++) {
    if (this[topic][i] === callback) {
      this[topic].splice(i, 1);
      return true;
    }
  }

  return false;
};

mediator.publish = function publish() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var topic = args.shift();

  if (!this.hasOwnProperty(topic)) {
    return false;
  }

  for (var i = 0, len = this[topic].length; i < len; i++) {
    this[topic][i].apply(undefined, args);
  }

  return true;
};

exports.default = mediator;