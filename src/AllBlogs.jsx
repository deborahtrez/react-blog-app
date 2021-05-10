import React, {Component} from 'react'
import axios from 'axios'
import Blog from './Blog'

class AllBlogs extends Component {
    constructor(){
        super()
        this.state = {blogs: []}
    }

    componentDidMount() {
        axios.get('http://localhost:7000/blogs/')
            .then(response => {
                this.setState({blogs:response.data})
            })
    }

    displayblogs(){
        return this.state.blogs.map(oneblog =>{
            return <Blog blog={oneblog} key={oneblog._id} />
        })
    }

    render() {
        return (
        <div>
            <div class="header">
                <h1>Travel Blog</h1>
          </div>
          <div class="row">

            <div class="leftcolumn">
                <div>
                    {this.displayblogs()}
                </div>
            </div>

            <div class="rightcolumn">
                <div class="card">
                    <h2>About Me</h2>
                    <div class="fakeimg sometext">Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <div class="card">
                    <h3>Popular Post</h3>
                    <div class="fakeimg">Image</div>
                    <div class="fakeimg">Image</div>
                    <div class="fakeimg">Image</div>
                </div>
                <div class="card">
                    <h3>Follow Me</h3>
                    <p>Some text..</p>
                </div>
            </div>
            </div>
        </div> );
    }
}

export default AllBlogs;
