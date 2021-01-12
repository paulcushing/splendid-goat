import React from "react";
import _ from "lodash";

import { withPrefix } from "../utils";

export default class BlogPostGallery extends React.Component {
  render() {
    const gallery = _.get(this.props, "gallery", null);
    console.log(this.props);

    const altText = _.get(this.props, "page.frontmatter.title", null);
    return (
      <div className="post-gallery">
        {_.map(gallery, (image, image_idx) => (
            <img
              className="post-gallery-image"
              key={image_idx}
              src={withPrefix(image)}
              alt={altText + ' ' + (image_idx+1)}
            />
    ))}
      </div>
    );
  }
}
