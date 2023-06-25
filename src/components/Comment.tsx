import React from 'react';
import {IComment} from '../types/types';

interface ICommentProps {
  comment: IComment;
  onDelete: Function;
}

export default function Comment({comment, onDelete}: ICommentProps) {
  function getAvatarInitials(userName: string) {
    return userName.slice(0, 2).toUpperCase();
  }
  return (
    <div className="comment">
      <div className="comment__top">
        <div className="comment__top-avatar">
          {getAvatarInitials(comment.user.username)}
        </div>
        <div className="comment__top-username">
          {comment.user.username}
        </div>
      </div>
      <div
        className="close-btn comment__close-btn"
        onClick={() => onDelete(comment.id)}
        >
        X
      </div>
      <p className="comment__text">{comment.body}</p>
    </div>
    )
}