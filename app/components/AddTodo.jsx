var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var tdText = this.refs.tdText.value;

    if (tdText.length > 0) {
      this.refs.tdText.value = '';
      this.props.onAddTodo(tdText);
    } else {
      this.refs.tdText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onFormSubmit} className="add-todo">
          <input type="text" ref="tdText" placeholder="Enter todo here" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }

});

module.exports = AddTodo;
