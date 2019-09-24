import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";

import { addTask } from "../actions";

class TasksAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }
  onChangeInput = event => {
    this.setState({
      ...this.state,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };
  addHandler = event => {
    const { addTask } = this.props;
    const { title, description } = this.state;

    const data = {
      id: uuidv1(),
      userId: 1,
      title,
      description
    };
    event.preventDefault();
    addTask(data);
  };
  render() {
    return (
      <div className="task-add-form-box">
        <form action="">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              onChange={this.onChangeInput}
              type="text"
              name="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              onChange={this.onChangeInput}
              type="text"
              name="description"
              className="form-control"
              rows="10"
            />
          </div>
          <div className="form-group">
            <input
              onClick={this.addHandler}
              className="btn btn-primary float-right"
              type="submit"
              value="add"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(TasksAddForm);
