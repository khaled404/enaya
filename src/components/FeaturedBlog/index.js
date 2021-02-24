import React from 'react';
import {Link} from "react-router-dom";

const FeaturedBlog = ({title,thumb,publishDate,id}) => {
    const blogURL = `blog/${title.split(' ').join('-').toLocaleLowerCase()}?id=${id}`;
    return (
        <div className="single-blog-item">
            <div className="post-thumb">
                <Link to={blogURL}><img src={require('../../assets/img/' + thumb)} alt={title} /></Link>
            </div>

            <div className="post-info">
                <h6><Link to={blogURL}>{title}</Link></h6>
                <span className="post-date"><i className="fa fa-clock-o"/>  {publishDate}</span>
            </div>
        </div>
    );
};

export default FeaturedBlog;