import React, {useState, useEffect} from 'react';
import Textarea from './Textarea';
import {IComment} from '../types/types';
import {IUser} from '../types/types';

interface ICommentFormProps {
  comments: IComment[],
  onSubmit: Function
}

const defaultUser: IUser = {
  id: 101,
  username: 'default_user',
}

export default function CommentForm({comments, onSubmit}: ICommentFormProps) {
  const [newComment, setNewComment] = useState<IComment | null>(JSON.parse(localStorage.getItem('newComment')));

  function getEmptyComment() {
    const maxId = comments.reduce((maxId: number, comment: IComment) => {
      return maxId < comment.id ? comment.id : maxId;
    }, 0);
    return {
      body: '',
      id: maxId + 1,
      user: defaultUser
    }
  }

  function saveComment(commentBody: string) {
    setNewComment({...newComment, body: commentBody});
    localStorage.setItem('newComment', JSON.stringify({...newComment, body: commentBody}));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(newComment);
    setNewComment(null);
    localStorage.removeItem('newComment');
  }

  useEffect(() => {
    if (!newComment && comments.length > 0) {
      const emptyComment = getEmptyComment();
      setNewComment(emptyComment);
      localStorage.setItem('newComment', JSON.stringify(emptyComment));
    }
  },[comments]);

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <Textarea value={newComment?.body} onInput={saveComment}/>
      <button className="btn">Send</button>
    </form>
  )
}
