import { useState } from "react";
import "./comment.scss";

export default function Comment() {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      setInputText("Вы ничего не написали.");
    } else if (inputText.includes("viagra") || inputText.includes("xxx")) {
      setInputText("Пожалуйста, не пишите такие вещи в моем блоге.");
    } else {
      const newComment = { text: inputText };
      setComments([...comments, newComment]);

      setInputText("");
    }
  };

  return (
    <form className='text-area' onSubmit={handleSubmit}>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={10}
        cols={100}
        placeholder='Оставьте ваш комментарий'
      ></textarea>
      <button type='submit' className='button'>
        Отправить комментарий
      </button>
      <div className='comments__container'>
        <ol>
          {comments
            .slice(0)
            .reverse()
            .map((comment, index) => (
              <li
                key={comment.id}
                style={index === 0 ? { fontWeight: "bold" } : null}
              >
                {comment.text}
              </li>
            ))}
        </ol>
      </div>
    </form>
  );
}
