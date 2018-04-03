import React from "react";
import "./ChatList.css";
import avatar from "./avatar.png";

export default ({ chats }) => (
  <ul>
    {chats.map(chat => {
      return (
        <div>
          <div className="row show-grid">
            <div className="col-xs-12">
              <div className="chatMessage">
                <div className="box">
                  <p>
                    <strong>{chat.username}</strong>
                  </p>
                  <p>{chat.message}</p>
                </div>
                <div className="imageHolder">
                  <img
                    src={avatar}
                    alt="logo"
                    className="img-response avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </ul>
);
