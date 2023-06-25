import React, {useState, useEffect} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import {IComment} from '../types/types';


export default function Comments() {
  const localStorageComments = JSON.parse(localStorage.getItem('comments'));
  const [comments, setComments] = useState<IComment[] | null>(localStorageComments);

  function loadComments() {
    fetch('https://dummyjson.com/comments')
      .then((response) => response.json())
      .then((data) => {
        const comments = data.comments.slice(0, 3);
        localStorage.setItem('comments', JSON.stringify(comments));
        setComments(comments);
      });
  }

  function AddNewComment(newComment: IComment) {
    setComments([...comments, newComment]);
  }

  function deleteComment(id: number) {
    console.log('In delete');
    setComments(comments.filter((comment: IComment) => comment.id !== id));
  }

  useEffect(() => {
    if (comments === null) {
      loadComments();
    }
  }, []);

  useEffect(() => {
    if (comments !== null) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  return (
    <div className="comments">
      <div className = "comments-wrapper">
      {
        comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} onDelete={deleteComment}/>
        ))
      }
      </div>
      <CommentForm comments={comments} onSubmit={AddNewComment}/>
    </div>
  )
}