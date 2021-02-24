import React from 'react';
import {Link} from 'react-router-dom'

function BlogItem(props) {
    const blogURL = `/blog/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    return (
        <div className={props.cols ? props.cols : 'col-md-6 col-lg-4'}>
            <div className="blog-item">
                {
                    props.thumb ? (
                        <figure className="blog-thumb">
                            <Link to={`${process.env.PUBLIC_URL + blogURL}`}>
                                <img src={require('../../assets/img/' + props.thumb)} alt={props.title} />
                            </Link>
                        </figure>
                    ) : null
                }
                <div className="blog-content">
                    <h2 className="h5"><Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.title}</Link></h2>
                    <p>{props.excerpt}</p>

                    <div className="blog-meta">
                        <Link to={`${process.env.PUBLIC_URL + blogURL}`}>By: {props.postBy}</Link>
                        <Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.date}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;