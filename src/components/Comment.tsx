import React from 'react';
import {IComment} from '../types/types';

export default function Comment({body, user}: IComment) {
  function getAvatarInitials(userName: string) {
    return userName.slice(0, 2).toUpperCase();
  }
  return (
    <div className="comment">
      <div className="comment__top">
        <div className="comment__top-avatar">
          {getAvatarInitials(user.username)}
        </div>
        <div className="comment__top-username">
          {user.username}
        </div>
      </div>
      <div className="close-btn comment__close-btn">X</div>
      <p className="comment__text">{body}</p>
    </div>
    )
}