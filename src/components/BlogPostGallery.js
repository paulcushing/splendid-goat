import React from "react";
import _ from "lodash";

import { withPrefix } from "../utils";

export default class BlogPostGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      reveal: 'hidden',
      lightboxImage: ''
    }
  }
  
  setLightbox = (image, altText) => {
    this.setState({ lightboxImage: image, showLightbox: true, reveal: 'shown' });
  }

  closeLightbox = () => {
    this.setState({ reveal: 'hidden' });
    setTimeout(() => this.setState({ lightboxImage: '', showLightbox: false }), 400)
    
  }

  render() {
    const gallery = _.get(this.props, "gallery", null);

    const altText = _.get(this.props, "page.frontmatter.title", null);
    return (
      <div id="gallery">
        {_.map(gallery, (image, image_idx) => (
          
            <div key={image_idx}>
              <img
                className="post-gallery-image"
                src={withPrefix(image)}
                alt={altText + ' ' + (image_idx + 1)}
                onClick={(e) => {this.setLightbox(image, altText)}}
              />
            </div>
            
          
    ))}
    {this.state.showLightbox ? (
      <div className={`lightbox ${this.state.reveal}`}>
        <div className="content">
          <img src={withPrefix(this.state.lightboxImage)} />
        <a className="close" onClick={(e) => this.closeLightbox()}></a>
      </div>
    </div>
    ) : null}
      </div>
    );
  }
}
