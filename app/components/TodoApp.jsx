var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
