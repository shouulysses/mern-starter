import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

export class PostCreateWidget extends Component {
  addPost = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `form ${(this.props.showAddPost ? 'appear' : '')}`;
    return (
      <div className={cls}>
        <div className='form-content'>
          <h2 className='form-title'><FormattedMessage id="createNewPost" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className='form-field' ref="name" />
          <input placeholder={this.props.intl.messages.postTitle} className='form-field' ref="title" />
          <textarea placeholder={this.props.intl.messages.postContent} className='form-field' ref="content" />
          <a className='post-submit-button' href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PostCreateWidget);
