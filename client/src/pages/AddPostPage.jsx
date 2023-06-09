import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/features/post/postSlice";

export const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [test, setText] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("text", text);
      data.append("image", image);

      dispatch(createPost(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const clearFormHandler = () => {
    setText("");
    setTitle("");
  };

  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault}>
      <label className="text-gray-300 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
        Прикрепить изображение:
        <input
          type="file"
          className="hidden"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>

      <div className="flex object-cover py-2">
        {image && <img alt={image.name} src={URL.createObjectURL(image)} />}
      </div>

      <label className="text-xs text-white opacity-70">
        Заголовок поста
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Заголовок"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:/text-gray-700"
        />
      </label>

      <label className="text-xs text-white opacity-70">
        Текст поста
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Текст поста"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:/text-gray-700 resize-none h-40"
        ></textarea>
        <div className="flex items-center justify-center gap-8 mt-4">
          <button
            onClick={submitHandler}
            className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4"
          >
            Добавить пост
          </button>
          <button
            onClick={clearFormHandler}
            className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4"
          >
            Отменить
          </button>
        </div>
      </label>
    </form>
  );
};
