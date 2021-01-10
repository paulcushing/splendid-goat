import React from "react";
import _ from "lodash";

import { withPrefix } from "../utils";

export default class BlogPostGallery extends React.Component {
  render() {
    let galleries = _.get(this.props.data, "galleries", null);
    return (
      <div className="post-gallery">
        {_.map(galleries, (gallery, gallery_idx) => {
          let { images } = gallery;
          return _.map(images, (image, image_idx) => (
            <img
              className="post-gallery-image"
              key={image_idx}
              src={withPrefix(image)}
              alt={gallery.title}
            />
          ));
        })}
      </div>
    );
  }
}
