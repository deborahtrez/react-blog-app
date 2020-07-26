import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom'
import AllBlogs from './AllBlogs'
import Nav from './Nav'
import CreateBlog from './CreateBlog'


class App extends Component {
    render() { 
        return ( 
            <BrowserRouter>
                <Nav />
                    <div>
                        <Route path ='/' exact component={AllBlogs} />
                        <Route path = '/create' component = {CreateBlog} />
                    </div>
            </BrowserRouter>
         );
    }
}
 
export default App;