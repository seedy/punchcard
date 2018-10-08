import connect from "react-redux/es/connect/connect";
import {Card} from "./card";
import {getPostsByTypeSelector} from "./post.selector";

const mapStateToProps = (state, props) => {
  return {
    posts: getPostsByTypeSelector(state, props.type)
  };
};

export default connect(
  mapStateToProps
)(Card);
