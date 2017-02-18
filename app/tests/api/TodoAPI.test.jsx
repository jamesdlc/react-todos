var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('set Todos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 9,
        text: 'cool stuff',
        completed: false
      }];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = 'cool';

      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('get Todos', () => {
    it('should return an empty array if local storage data is invalid', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in local storage', () => {
      var todos = [{
        id: 9,
        text: 'cool stuff',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filter Todos', () => {
    var todos = [{
        id: 1,
        text: 'cool',
        completed: true
      },
      {
        id: 4,
        text: 'all right',
        completed: false
      },
      {
        id: 5,
        text: 'nah son, all good',
        completed: false
      }];

      it('should return all items if showCompleted is true', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toEqual(3);
      });

      it('should return only non completed items if showCompleted is false', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, false, '');
        expect(filteredTodos.length).toEqual(2);
      });

      it('should sort by completed status', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos[0].completed).toEqual(false);
      });
      it('should filter todos by search text', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, 'all');
        expect(filteredTodos.length).toEqual(2);
      });
      it('should return all todos if there is no search text', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toEqual(3);
      });
  });
});
