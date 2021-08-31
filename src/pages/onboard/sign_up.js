import React, { Component } from 'react'
import {callApi, s, e, swr, apiConfigs, url} from '../../adapter/common'
import { Link } from 'react-router-dom'

import InputField from '../../components/inputField'
import ButtonS from '../../components/buttons.js'

import check from "../../assets/images/check.svg";

import styles from "../../styles/onboard/sign_up.module.scss";

class SignUp extends Component{
    
   constructor (props){
        super(props)

        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            JobRole: '',
            Password: '',
            isLoading: false
        }
    }
    modelSelect(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    model(e){
        this.setState({
            [e.name]: e.text
        })
    }
    async signup(){
        if(this.state.isLoading === true){
            return
        }
        
        if(this.state.FirstName.trim()==='' || this.state.LastName.trim()==='' || this.state.Email.trim()==='' || this.state.JobRole.trim()==='' || this.state.Password.trim()===''){
            return e("Please, ensure you have filled in all the fields")
        }
        else{
            this.setState({
                isLoading : true
            })

            const res = await callApi('post', apiConfigs.apiHeroku+'adduser', this.state)
            if(res.status === 200){
                s("Proceed to Login")
                // this.props.history.push('/onboard/sign-in')
            }
            else{
                // swr(res.data.message)
                swr("Please, fill in the required fields")
            }

            this.setState({
                isLoading : false
            })
        }
    }

    render(){
        return(
            <div>
                <section className={styles.sign_up}>
                <div className={styles.info}>
                    <div className={styles.info_nav}>
                        <Link to={url.adminHome}>back</Link>
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

                        <Link to={url.signIn}>
                            Login
                        </Link>
                    </div>

                    <h5 className={styles.h5}>
                        Add your employee.
                    </h5>

                    <div className={styles.form_ic}>
                            
                        <InputField type="text" name="FirstName" placeholder="First name" placeinside="First name" inputValue={e => this.model(e)} />
                            
                        <InputField type="text" name="LastName" placeholder="Last name" placeinside="Last name" inputValue={e => this.model(e)} />
                            
                        <InputField type="email" placeholder="Email address" placeinside="Email address"  name="Email" inputValue={e => this.model(e)} />  

                        <InputField type="text" name="JobRole" placeholder="Job role" placeinside="Job role" inputValue={e => this.model(e)} />
                            
                        <InputField type="password" name="Password" placeholder="Password" placeinside="Password" inputValue={e => this.model(e)} />                       
                        
                        <ButtonS onClick={() => this.signup()} isLoading={this.state.isLoading} text="SIGN UP"/>
                        
                    </div>

                    <div className={styles.terms}>
                        By clicking the "SIGN UP" button you agree to 1Stash's <a href="#0" target="_blank">Terms of Use</a> and <a href="#0" target="_blank">Privacy Policy</a>.
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
     

export default SignUp