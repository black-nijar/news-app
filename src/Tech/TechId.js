import React, { Component } from 'react'



class TechId extends Component {

    state = {
         detail: [ ]
    }

    componentDidMount(){
        const { id } = this.props.match.params
        const { art } = this.props.location
        this.setState({
            detail: art
        })
    }
    render() {
        const { detail } = this.state
        console.log(detail);
        const Data = detail ? (
            <div className='container'>
               <h4>{  detail.title  }</h4>
               <div className='container'>
                <img className=''
                 src={detail.urlToImage} alt='null'
                  style={{width: '100%', height: 'auto'}}/>
                  </div>
                
                 <h5>{  detail.description}</h5><br/>
                 <p>Author:  {detail.author}</p>
                 <p>  Date  : { detail.publishedAt}</p>
            For more details <a href={ detail.url }>Click here -></a>
              
            </div>
        ):(
            <div>
                <div className='center' style={{margin: '10em'}}>
                     <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner">
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
            </div>
        )
        return (
            <div style={{ marginBottom: '5em'}}>
           
                { Data  }
              
            </div>
        )
    }
}

export default TechId
