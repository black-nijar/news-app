import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Tech extends Component {
    state = {
        news: []
    }
    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a1854a2462a34cf78c2a0f2410a15cea`)
            .then(res => {
                this.setState({
                    news: res.data.articles
                })
            })
    }
    render() {
        const { news } = this.state
        console.log(news)
        
        const List = news.length ? (
            news.map((tech, index) => {
                return (
                    
                    <div className='container ' key={index} style={{margin: '2em'}}>
                    <Link className='hover' to={{
                        pathname:`/${tech.title}`,
                        art     : tech
                    }}>
                    <div className="row">
                    <div className="col s12 ">
                    <div className="card -panel hoverable">
                    <div className='z-depth-3'>

                  
                        <div className="card-image">
                        
                        <img src={tech.urlToImage} alt='null'/>
                       
                        </div>
                        <div className="card-content">
                        <h5>{ tech.title}</h5>
                        </div>
                       
                        <span>Date: {tech.publishedAt}</span>
                       
                    </div>  </div>
                    </div>
                </div>
                    </Link>                
                
                <hr/>
                    </div>
                    
                    
                 
                )
            })
        ) : (
                <div className='center' style={{margin: '10em'}}>
                     <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>

                </div>
            )
        return (
            <div className='center'>
           
             <div className='container'>
             <a href='/tech' style={{margin: '3em'}}>Refesh</a>
             { List }
            
             </div>
           
                
            </div>
            
        )
    }
}

export default Tech
