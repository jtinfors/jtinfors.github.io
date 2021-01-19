var React = require('react');

var Ticker = function(name) {
  return (
    <p>
      Hello<span> {name}</span>
    </p>
  );
};

module.exports = Ticker;
