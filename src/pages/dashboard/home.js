import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/dashboard/header";
import {url} from '../../adapter/common';

import styles from "../../styles/dashboard/home.module.scss";


class Home extends Component{
    

    render(){
        return(
            <div>
                    <div className="content-container">
        {/*<Header />*/}
                    <div className="content">

                        <div className={styles.wrapper}>
                            <div className={styles.upload}>
                                <div className={styles.head}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                                    </svg>

                                    <Link to={url.signUp}>Add new user</Link>
                                </div>

                                <div className={styles.welcome}>
                                    <h3>Hi Omopariola</h3>
                                </div>

                                <form className={styles.up}>
                                    <input type="file" name="file_upload" />
                                    <button>Upload</button>
                                </form>

                                <div className={styles.foot}>
                                    <Link to="#0">Get help</Link>
                                    <Link to={url.signUp} className={styles.a}>Logout</Link>
                                </div>
                            </div>
                            
                            <div className={styles.download}>
                            </div>
                        </div>  
                            
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;