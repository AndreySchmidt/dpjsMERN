import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AiFillEye,
  AiOutlineMessage,
  AiTwotoneEdit,
  AiFillDelete,
} from "react-icons/ai";
import Moment from "react-moment";
import axios from "../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { removePost } from "../redux/features/post/postSlice";
import { toast } from "react-toastify";

export const PostPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [post, setPost] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const removePostHandler = () => {
    try {
      dispatch(removePost(params.id));
      toast("Пост был удален");
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return (
      <div className="text-xl text-center text-white py-10">Loading ...</div>
    );
  }

  return (
    <div>
      <button className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4">
        <Link className="flex" to={"/"}>
          Назад
        </Link>
      </button>
      <div className="flex gap-10 py-8">
        <div className="w-2/3">
          <div className="flex flex-col basis-1/4  flex-grow">
            <div
              className={
                post.imgUrl ? "flex rounded-sm h-80" : "flex rounded-sm"
              }
            >
              {post.imgUrl && (
                <img
                  src={`http://localhost:3002/${post.imgUrl}`}
                  alt="img"
                  className="object-cover w-full"
                />
              )}
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="tets-xs text-white opacity-50">
                {post.username}
              </div>
              <div className="tets-xs text-white opacity-50">
                <Moment date={post.createdAt} format="D MMM YYYY" />
              </div>
            </div>
            <div className="tets-xl text-white">{post.title}</div>
            <p className="text-white opacity-60 text-xs pt-4">{post.text}</p>

            <div className="flex items-center gap-3 mt-2 justify-between">
              <div className="flex gap-3 mt-4">
                <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
                  <AiFillEye /> <span>{post.views || 0}</span>
                </button>
                <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
                  <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
                </button>
              </div>

              {user?._id === post.author && (
                <div className="flex gap-3 mt-4">
                  <button className="flex items-center justify-center gap-2 text-white opacity-50">
                    <AiTwotoneEdit />
                  </button>
                  <button
                    onClick={removePostHandler}
                    className="flex items-center justify-center gap-2 text-white opacity-50"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-1/3">comments</div>
      </div>
    </div>
  );
};
