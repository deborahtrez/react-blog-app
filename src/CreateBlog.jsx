import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import './index.css'

class CreateBlog extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            article: '',
            author: '',
            date: new Date()
        }
        this.changedArticle = this.changedArticle.bind(this)
        this.changedTitle = this.changedTitle.bind(this)
        this.changedAuthor = this.changedAuthor.bind(this)
        this.changedDate = this.changedDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changedTitle(event){
        this.setState({
            title:event.target.value   
        })
    }
    changedArticle(event){
        this.setState({
            article:event.target.value
        })
    }
    changedAuthor(event){
        this.setState({
            author:event.target.value
        })
    }
    changedDate(date){
        this.setState({
            date:date
        })
    }

    onSubmit(event){
        event.preventDefault()
        
        const blog = {
            title: this.state.title,
            article: this.state.article,
            author: this.state.author,
            date : this.state.date
        }
        console.log(blog)

        axios.post('http://localhost:6000/blogs/create', blog)
        .then(response => console.log(response.data))

        window.location = '/'

        // this.setState ({
        //     title: "",
        //     article: "",
        //     author: "" 
        // })
    }

        
    render() { 
        return ( 
            <div>
                <form onSubmit = {this.onSubmit} className='formSize'>
                    
                    <div className="input-group input-group-lg">
                        <h3>Title</h3>
                        <input type="text" onChange={this.changedTitle} value = {this.state.title} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
                    </div>

                    <div className="input-group">
                        <h4>Article</h4>
                        <textarea onChange={this.changedArticle} value = {this.state.article} className="form-control" aria-label="With textarea"></textarea>
                    </div>

                    <div className="input-group input-group-lg">
                        <h5>Author</h5>
                        <input type="text" onChange={this.changedAuthor} value = {this.state.author} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
                    </div>

                    <label>Date of Submission</label>
                    <div>
                        <DatePicker 
                        selected = {this.state.date}
                        onChange = {this.changedDate}
                        className='form-group form-control'
                        />
                    </div>

                </form>

                <input type='submit' value ='Create Blog' className='btn btn-outline-info' />
            </div>
        
        );
    }
}
 
export default CreateBlog;