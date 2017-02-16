var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Take out the trash'
        },
        {
          id: 2,
          text: 'Wash the car'
        },
        {
          id: 3,
          text: 'Buy milk'
        },
        {
          id: 4,
          text: 'Call Sarah'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
