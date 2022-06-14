import Post from 'components/Post/Post';
import { PostsData } from 'Data/PostsData';
import './Posts.scss';
const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, idx) => {
        return <Post key={idx} data={post} />;
      })}
    </div>
  );
};

export default Posts;
