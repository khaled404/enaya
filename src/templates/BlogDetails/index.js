import React,{Fragment} from 'react';
import PageWrapper from "../../components/PageWrapper";
import BlogDetailsContentWrapper from "./ContentWrapper";
import SidebarForBlog from "../SidebarForBlog";
import PageHeader from "../../components/PageHeader";
import BlogData from "../../data/Blog/blog";

const BlogDetailsPage = ({sidebar}) => {
    const post_id = new URLSearchParams(window.location.search).get("id");
    const post = BlogData.find(post => post.id === parseInt(post_id));

    return (
        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={post.title}
                content={post.excerpt}
            />

            <PageWrapper classes={'blog-details-page-content sp-y'}>
                <div className={!sidebar ? 'col-12' : 'col-lg-9'}>
                    <BlogDetailsContentWrapper sidebar={sidebar} post={post}/>
                </div>

                {sidebar ? <SidebarForBlog/> : null}
            </PageWrapper>
        </Fragment>
    );
};

export default BlogDetailsPage;