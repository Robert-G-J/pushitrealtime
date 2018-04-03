import React from "react";

export default ({ text, username, handleTextChange }) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <div className="chat">
          <div className="col-xs-5 col-xs-offset-3">
            <input
              type="text"
              className="form-control"
              placeholder="chat here..."
              onChange={handleTextChange}
              onKeyDown={handleTextChange}
            />
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <h4 className="greetings">Hello, {username}</h4>
    </div>
  </div>
);
