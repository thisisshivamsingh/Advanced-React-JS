import { useParams, useLocation } from "react-router-dom";

const PostItem = () => {
  let params = useParams();

  console.log(params);

  return <>Post ID XXX</>;
};

export default PostItem;
