import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import {IComment} from '../types/types';


export default function Comments() {
  const [comments, setComments] = useState<IComment[]>([]);

  function loadComments() {
    fetch('https://dummyjson.com/comments')
      .then((response) => response.json())
      .then((data) => {
        const comments = data.comments.slice(0, 3);
        localStorage.setItem('comments', JSON.stringify(comments));
        setComments(comments);
      });
  }

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (!storedComments) {
      loadComments();
    } else {
      console.log('comments from local storage: ', storedComments);
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    // console.log('useEffect: ', comments);
  }, [comments]);
  return (
    <div className="comments">
      <div className = "comments-wrapper">
      {
        comments?.map((comment) => (
          <Comment key={comment.id} {...comment}/>
        ))
      }
      </div>
      <CommentForm/>
    </div>
  )
}