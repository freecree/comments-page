import React, {useState, useEffect} from 'react';
import Textarea from './Textarea';

export default function CommentForm() {
  return (
    <form className="comment-form">
      <Textarea/>
      <button className="btn">Send</button>
    </form>
  )
}
