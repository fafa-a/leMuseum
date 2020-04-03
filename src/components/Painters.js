import React, { Component } from "react";
import { Link } from "react-router-dom";

class Painters extends Component {
  //   clicked(event) {
  //     event.preventDefault();
  //     console.log(this.props);
  //   }
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link
          to={"/artist/" + post.lastName + "?id=" + post.id}
          key={post.id}
          //   onClick={this.clicked.bind(this)}
        >
          {post.firstName}&nbsp;
          {post.lastName}
          <img key={post.id} src={post.profilePic} alt="" width="100" />
        </Link>
      </div>
    );
  }
}

export default Painters;
