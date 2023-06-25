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

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    console.log('storedComments: ', storedComments);
    if (!storedComments) {
      loadComments();
    } else {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    console.log('Comments::useEffect2: ', comments);
    // if (comments) {
    //   localStorage.setItem('comments', JSON.stringify(comments));
    // }
    // localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  console.log('Comments::render: ', comments);

  return (
    <div className="comments">
      <div className = "comments-wrapper">
      {
        comments?.map((comment) => (
          <Comment key={comment.id} {...comment}/>
        ))
      }
      </div>
      <CommentForm comments={comments} onSubmit={AddNewComment}/>
    </div>
  )
}