import React, {Component} from 'react';
import Navbar from '../components/layouts/Navbar';
import{Routes, Route} from 'react-router-dom';
import Accueil from './Accueil/Accueil';
// import Contact from ''

class Site extends Component {
    render(){
        return(
            <>
                <Navbar />
                <Routes>
                    <Route path="/" render={()=><Accueil />}/>
                    <Route path="/Contact" render={()=><Contact />}/>
                </Routes>
            
            </>
        )
    }
}