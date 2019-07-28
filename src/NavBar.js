import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {
    onDate() {
       this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <nav className='nav-wrapper cyan - 0'>
                    <div className='container'>
                        <Link className='brand-logo' to='/'>Home</Link>
                    </div>
                </nav>
                <div className='container' style={{ margin: '3em' }}>

                    <Link to="/tech"><button type="button">
                        <div>  TechCrunch </div> </button>
                    </Link>
                    <Link to='/bitcoin'>Bitcoin</Link>
                    <hr />


                </div>


            </div>
        )
    }
}

export default NavBar
