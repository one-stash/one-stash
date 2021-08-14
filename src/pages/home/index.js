import React, {Component} from 'react'
// import {Link} from 'react-router-dom'

import Navbar from '../../components/home/Navbar'
import Header from '../../components/home/header'
import WhyUs from '../../components/home/WhyUs'
import Footer from '../../components/home/Footer'


import styles from '../../styles/home/index.module.scss'

class Home extends Component{

    

    render(){
        return(
            <div>
                <Navbar />
                
                <main>
                    
                    <Header />
                    <WhyUs />            

                </main>

                <Footer />

            </div>
        )
    }
}

export default Home;