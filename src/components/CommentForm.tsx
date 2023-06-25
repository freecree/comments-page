import React, {useState, useEffect} from 'react';
import Textarea from './Textarea';
import {IComment} from '../types/types';
import {IUser} from '../types/types';

interface ICommentFormProps {
  comments: IComment[],
  setComments: Function
}

export default function CommentForm({comments, setComments}: ICommentFormProps) {
  const [newComment, setNewComment] = useState<IComment | null>(JSON.parse(localStorage.getItem('newComment')));

  const defaultUser: IUser = {
    id: 101,
    username: 'default_user',
  }

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
    const myNewComment = {...newComment, body: commentBody};
    setNewComment({...newComment, body: commentBody});
    localStorage.setItem('newComment', JSON.stringify({...newComment, body: commentBody}));
  }

  useEffect(() => {
    if (!newComment) {
      const emptyComment = getEmptyComment();
      setNewComment(emptyComment);
      localStorage.setItem('newComment', JSON.stringify(emptyComment));
    }
  },[]);

  return (
    <form className="comment-form">
      <Textarea value={newComment?.body} onInput={saveComment}/>
      <button className="btn">Send</button>
    </form>
  )
}
