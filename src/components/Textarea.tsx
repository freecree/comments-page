import React, {useState, useEffect} from 'react';

interface ITextareaProps {
  value: string,
  onInput: Function
}
export default function Textarea({value, onInput}: ITextareaProps) {
  function onChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onInput(event.target.value);
  }

  return (
    <textarea className="textarea" value={value} onChange={onChangeHandler} name="text-name" rows={10}>
      
    </textarea>
  )
}
