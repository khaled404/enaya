import React from 'react';

const BlogDetailsContentWrapper = ({post,sidebar}) => {
    return (
        <article className="blog-post-details">
            <figure className="blog-post-thumb">
                <img src={require('../../assets/img/' + post.thumb)} alt={post.title} />
            </figure>

            <div className="blog-post-txt-wrap">
                <div className="row">
                    {
                        !sidebar ? (
                            <div className="col-md-3 col-lg-2 order-1 order-md-0">
                                <div className="author-info mt-sm-40">
                                    <div className="author-thumb">
                                        <img src={require('../../assets/img/' + post.author.proPic)} alt={post.author.name} />
                                    </div>
                                    <div className="author-txt">
                                        <h5>{post.author.name} <span className="designation">{post.author.designation}</span></h5>

                                        <div className="member-social-icons">
                                            <a href={`https://facebook.com/${post.author.socials.facebook}`} target="_blank" rel='noopener noreferrer'>
                                                <i className="fa fa-facebook"/>
                                            </a>
                                            <a href={`https://twitter.com/${post.author.socials.twitter}`} target="_blank" rel='noopener noreferrer'>
                                                <i className="fa fa-twitter"/>
                                            </a>
                                            <a href={`https://linkedin.com/company/${post.author.socials.linkedin}`} target="_blank" rel='noopener noreferrer'>
                                                <i className="fa fa-linkedin"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ):null
                    }

                    <div className={`m-auto order-0 ${!sidebar ? 'col-md-9 col-lg-8': 'col-12'}`}>
                        <div className="blog-post-txt">
                            <h2 className="h3">{post.title}</h2>

                            <div dangerouslySetInnerHTML={{__html: post.content}} />
                        </div>

                        <div className="share-article text-center">
                            <h6>Share this article</h6>
                            <div className="member-social-icons justify-content-center">
                                <a className="facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                    <i className="fa fa-facebook"/>
                                </a>
                                <a className="twitter" href={`https://twitter.com/home?status=${window.location.href}`}>
                                    <i className="fa fa-twitter"/>
                                </a>
                                <a className="reddit" href={`http://reddit.com/submit?url=${window.location.href}&title=${post.title}`}>
                                    <i className="fa fa-reddit"/>
                                </a>
                                <a className="pinterest" href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=&description=`}>
                                    <i className="fa fa-pinterest"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogDetailsContentWrapper;