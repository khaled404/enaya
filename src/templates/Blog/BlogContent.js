import React, {Component, Fragment} from 'react';
import BlogItem from "../../components/Blog/blogItem";
import BlogItemList from "../../components/Blog/blogItemList";
import Pagination from "../../components/Pagination";

import BlogData from '../../data/Blog/blog'

class BlogContent extends Component {
    state = {
        posts: [],
        currentPage: 1,
        postsPerPage: 6
    };

    componentDidMount() {
        this.setState({
            posts: BlogData.reverse()
        })
    }

    render() {
        // Get current posts
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);

        // Change page
        const paginate = currentPage => this.setState({
            currentPage: currentPage
        });
        return (
            <div className={this.props.cols + ' ' + this.props.classes}>
                <Fragment>
                    <div className={`blog-content-wrapper ${this.props.blog_type === 'list' && 'blog-list'}`}>
                        <div className="row mtn-30">
                            {
                                this.props.blog_type === 'list' ? (
                                    <div className={'col-12'}>
                                        {
                                            currentPosts.map(blog => (
                                                <BlogItemList
                                                    key={blog.id}
                                                    id={blog.id}
                                                    thumb={blog.thumb}
                                                    title={blog.title}
                                                    excerpt={blog.excerpt}
                                                    postBy={blog.author.name}
                                                    date={blog.publishDate}
                                                />
                                            ))
                                        }
                                    </div>
                                ) : (
                                    currentPosts.map(blog => (
                                        <BlogItem
                                            key={blog.id}
                                            id={blog.id}
                                            cols={this.props.cols === 'col-12' ? 'col-md-6 col-lg-4' : 'col-md-6'}
                                            thumb={blog.thumb}
                                            title={blog.title}
                                            excerpt={blog.excerpt}
                                            postBy={blog.author.name}
                                            date={blog.publishDate}
                                        />
                                    ))
                                )
                            }
                        </div>
                    </div>

                    <Pagination
                        postsPerPage={this.state.postsPerPage}
                        totalPosts={this.state.posts.length}
                        paginate={paginate}
                        currentPage={this.state.currentPage}
                    />
                </Fragment>
            </div>
        );
    }
}

export default BlogContent;