import React from 'react';
import Comment from './Comment';

export default function Comments() {
  return (
    <div className="comments">
      <div className = "comments-wrapper">
        <Comment/>
        <Comment/>
      </div>
    </div>
    )
}