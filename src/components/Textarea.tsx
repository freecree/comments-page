import React, {useState, useEffect} from 'react';

interface ITextareaProps {
  value: string,
  onInput: Function
}
export default function Textarea({value, onInput}: ITextareaProps) {

  return (
    <textarea
      className="textarea"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onInput(e.target.value)}
      name="text-name"
      rows={10}>
    </textarea>
  )
}
