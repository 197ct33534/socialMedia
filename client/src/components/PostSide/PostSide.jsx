import Posts from 'components/Posts/Posts';
import PostShare from 'components/PostShare/PostShare';
import './PostSide.scss';
const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
