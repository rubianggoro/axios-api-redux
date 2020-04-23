import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getTodos } from "../Redux/Actions/ActionApi";
import { getAbout, postAbout, deleteAbout } from "../Redux/Actions/ActionMock";

const DataApi = (props) => {
  //   console.log("props1", props);
  const [about, setAbout] = useState("");

  const handleChange = (event) => {
    setAbout(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const newAbout = {
      id: props.about[props.about.length - 1].id + 1,
      name: about,
    };
    props.postAbout(newAbout);
    // console.log(newAbout);
  };

  const handleDelete = (id) => {
    props.deleteAbout(id);
  };
  // console.log("props about", props.about);

  useEffect(() => {
    props.getTodos();
    props.getAbout();
  }, []);

  return (
    <div>
      <h1>Data API JSONPlaceHolder</h1>
      <ul>
        {props.todos.map((item, index) => (
          <li key={index}>
            {item.id}. {item.title}
          </li>
        ))}
      </ul>
      <h1> Data API from MockApi</h1>
      <form onSubmit={handleAdd}>
        <label>
          New Name :
          <input
            type="text"
            name="name"
            value={about}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      <ul>
        {props.about.map((item, index) => (
          <div key={index}>
            <li>
              {item.id}. {item.name}
            </li>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (props) => {
  console.log("props", props);
  return {
    todos: props.getTodos.data,
    about: props.getAbout.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()),
    getAbout: () => dispatch(getAbout()),
    postAbout: (obj) => dispatch(postAbout(obj)),
    deleteAbout: (id) => dispatch(deleteAbout(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataApi);
