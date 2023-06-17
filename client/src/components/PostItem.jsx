import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import Moment from "react-moment";

export const PostItem = ({ post }) => {
  if (!post) {
    return (
      <div className="text-xl text-center text-white py-10">Постов нет</div>
    );
  }
  return (
    <div className="flex flex-col basis-1/4 flex-grow">
      <div className={post.imgUrl ? "flex rounded-sm h-80" : "flex rounded-sm"}>
        {post.imgUrl && (
          <img
            src={`http://localhost:3002/${post.imgUrl}`}
            alt="img"
            className="object-cover w-full"
          />
        )}
      </div>
      <div className="flex justify-between items-center pt-2">
        <div className="tets-xs text-white opacity-50">{post.username}</div>
        <div className="tets-xs text-white opacity-50">
          <Moment date={post.createdAt} format="D MMM YYYY" />
        </div>
      </div>
      <div className="tets-xl text-white">{post.title}</div>
      <p className="text-white opacity-60 text-xs pt-4">{post.text}</p>

      <div className="flex items-center gap-3 mt-2">
        <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
          <AiFillEye /> <span>{post.views || 0}</span>
        </button>
        <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
          <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
        </button>
      </div>
    </div>
  );
};
