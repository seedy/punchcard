import connect from "react-redux/es/connect/connect";
import {Card} from "./card";
import {getCountPostsByTypeSelector, getStatsByTypeSelector} from "./post.selector";

const mapStateToProps = (state, props) => {
  return {
    stats: getStatsByTypeSelector(state, props),
    total: getCountPostsByTypeSelector(state, props)
  };
};

export default connect(
  mapStateToProps
)(Card);
