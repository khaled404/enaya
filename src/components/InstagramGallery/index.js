import React, {Component} from 'react';

class InstagramGallery extends Component {
    state = {
        photos: []
    };

    async componentDidMount() {
        try {
            fetch('https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={%22id%22:%226666331798%22,%22first%22:10,%22after%22:null}')
                .then(response=> response.json())
                .then(data=>{
                    console.log(data)
                })

        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className="instagram-gallery">
                {this.state.photos &&
                this.state.photos.map(({src, url, caption}) => (
                    <a href={url} target="_blank">
                        <img className="instagram-item" src={src} alt={caption}/>
                    </a>
                ))}
            </div>
        );
    }
}

export default InstagramGallery;