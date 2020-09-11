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
            {this.displayblogs()}
        </div> );
    }
}
 
export default AllBlogs;