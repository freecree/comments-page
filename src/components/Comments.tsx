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

  function AddNewComment(newComment: IComment) {
    setComments([...comments, newComment]);
    localStorage.setItem('comments', JSON.stringify([...comments, newComment]));
  }

  function deleteComment(id: number) {
    setComments(comments.filter((comment: IComment) => comment.id !== id));
    localStorage.setItem('comments', JSON.stringify(comments.filter((comment: IComment) => comment.id !== id)));
  }

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (!storedComments) {
      loadComments();
    } else {
      setComments(JSON.parse(storedComments));
    }
  }, []);

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