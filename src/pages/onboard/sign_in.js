import React, { Component } from 'react'
import {callApi, e, swr, apiConfigs, url} from '../../adapter/common'
import { Link } from 'react-router-dom'

import InputField from '../../components/inputField'
import Button from '../../components/button'

import check from "../../assets/images/check.svg";

import styles from "../../styles/onboard/sign_in.module.scss";

class SignIn extends Component{
    
    constructor (props){
        super(props)

        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }
    componentDidMount(){
        if(localStorage.user){
            localStorage.removeItem('user')
        }
    }
    model(e){
        this.setState({
            [e.name]: e.text
        })
    }

    async login(){
        if(this.state.isLoading === true){
            return
        }
        
        if(this.state.email.trim()==='' || this.state.password.trim()===''){
            return e("Please, ensure you have filled in all fields")
        }
        else{
            this.setState({
                isLoading : true
            })

            const res = await callApi('post', apiConfigs.apiUrl+'ApplicationUser/Login', this.state)
            if(res.status === 200){
                localStorage.setItem('user', JSON.stringify(res.data))
                this.props.history.push('/dashboard/user/home')
            }
            else{
                swr(res.data.message)
            }

            this.setState({
                isLoading : false
            })
        }
    }

    render(){
        return(
            <div>
                <section className={styles.sign_in}>
                <div className={styles.info}>
                    <div className={styles.info_nav}>
                        <Link to="/">back</Link>
                    </div>
                    <div className={styles.info_content}>
                        <div className={styles.head}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                            </svg>
                            <h6>1Stash</h6>
                            <p>free</p>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Multipurpose</h3>
                                <p>Made for every employer and employee. In between Microsoft 365.</p>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Agile feature</h3>
                                <p>Made for teams to work, share and collaborate.</p>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Your stash</h3>
                                <p>Cool grid arrangement of every of your uploaded files. </p>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Free tool</h3>
                                <p>Made with love from 1stash, free and easy to use.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.form}>
                    <div className={styles.form_nav}>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                            </svg>
                        </Link>                        

                        <Link to={url.aEntry}>
                            Admin entry
                        </Link>
                    </div>

                    <h5 className={styles.h5}>
                        Yay! you came back.
                    </h5>

                    <div className={styles.form_ic}>

                        <InputField type="email" placeholder="Email address" placeinside="Email address"  name="email" inputValue={e => this.model(e)} />
                            
                        <InputField type="password" name="password" placeholder="Password" placeinside="Password" inputValue={e => this.model(e)} />
                        
                        <Button onClick={() => this.login()} isLoading={this.state.isLoading} text="SIGN IN"/>
                        
                    </div>

                    <div className={styles.terms}>
                        <a href="#0" target="_blank" class="tiny-link">Forgot Password?</a>.
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
     

export default SignIn