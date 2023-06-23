import React from 'react';

export default function Comment() {
  return (
    <div className="comment">
      <div className="comment__top">
        <div className="comment__top-avatar">
          DT
        </div>
        <div className="comment__top-username">
          Dummy T
        </div>
      </div>
      <div className="close-btn comment__close-btn">X</div>
      <p className="comment__text">Text</p>
    </div>
    )
}