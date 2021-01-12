import React from "react";
import _ from "lodash";

import { withPrefix } from "../utils";

export default class BlogPostGallery extends React.Component {
  render() {
    let galleries = _.get(this.props, "galleries", null);
    /* TODO:
    * Works for one gallery - build to accomodate multiple
    */
    const galleryName = _.get(this.props, "page.frontmatter.galleries", null)[0].replace(/.yaml/g, '');
    const gallery = galleries[galleryName];
    
    return (
      <div className="post-gallery">
        {_.map(gallery.images, (image, image_idx) => (
            <img
              className="post-gallery-image"
              key={image_idx}
              src={withPrefix(image)}
              alt={gallery.title}
            />
    ))}
      </div>
    );
  }
}
