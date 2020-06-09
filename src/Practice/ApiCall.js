import React, {Component} from 'react'

import axios from 'axios'

class ApiCall extends Component{

    constructor(props){

        super(props)
        this.state = {

            posts:[],
            errorMessage:''
        }
    }

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response);
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error);
            this.setState({errorMessage:"error retreiving data"});
        })

    }


    render(){

        const {posts, errorMessage}=this.state

        return(<div>

           <h1> List of Posts</h1>
            {
                posts.length?posts.map(post=><div key={post.id}>{post.title} </div>):
                null
            }
                {
                    errorMessage?<div><h2>{ errorMessage}</h2></div>:null

                }
          
        </div>)
    }




}

export default ApiCall