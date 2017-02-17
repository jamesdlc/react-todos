var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Search = require('Search');

describe('Search', () => {
  it('should exist', () => {
    expect(Search).toExist();
  });

  it('should call onSearch with text input entered', () => {
    var searchText = "Car";
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy} />);

    search.refs.searchText.value = searchText;
    TestUtils.Simulate.change(search.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, "Car");

  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy} />);

    search.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(search.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, "");

  });
});
