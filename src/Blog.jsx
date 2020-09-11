import React, { Component } from 'react';

class Blog extends Component {
    
    render() { 
        return ( 
            <div>
                <h2>{this.props.blog.title}</h2>
                <p>{this.props.blog.article}</p>
                By <h6>{this.props.blog.author}</h6>
            </div>
         );
    }
}
 
export default Blog;