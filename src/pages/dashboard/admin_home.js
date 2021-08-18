import React, { Component } from "react";
import { Link } from "react-router-dom";
import {callApi, s, e, swr, apiConfigs, url} from '../../adapter/common'
import Header from "../../components/dashboard/header";
import InputField from '../../components/inputField';
import Buttona from '../../components/buttona';

import styles from "../../styles/dashboard/home.module.scss";


class AdminHome extends Component{
    
/*   constructor (props){
        super(props)

        let user = JSON.parse(localStorage.user)
        this.state = {
            file_name: '',            
            file_image: '',
            user: user,
            isLoading: false
        }
    }

    async upload(){
        if(this.state.isLoading === true){
            return
        }
        if(this.state.file_name.trim()==='' || this.state.file_image.trim()===''){
            return e("Please, ensure you have filled in all fields")
        }
        else{
            this.setState({
                isLoading : true
            })

            const dataObj = new FormData()
            dataObj.append('file_name', this.state.file_name)
            dataObj.append('file_image', this.state.file_image)
            dataObj.append('user_id', this.state.user.id)
            
            const res = await callApi('post', apiConfigs.apiUrl+'class/create.php', dataObj)
            if(res.status===201){
                this.setState({
                    dats: res.data.result
                })

                 if(this.state.dats){
                    let text = document.getElementById('copySection')
                    var range = document.createRange();
                    range.selectNode(text);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                    
                    navigator.clipboard.writeText(window.getSelection())
                    
                    s(res.data.message + ' The Invitation details have been copied to your clipboard')
                    this.props.history.push('/all-classes')
                }
            }
            else{
                swr(res.data.message)
            }

            this.setState({
                isLoading : false
            })
        }
    }

    setImg(e){
        this.setState({
            file_image: e.target.files[0]
        })
    }
    modelOther(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    model(e){
        this.setState({
            [e.name]: e.text
        })
    }*/

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
                                    <h6>Tips: Drag or drop a file in your stash 📁.</h6>
                                </div>

                                <form className={styles.up}>
                                    <InputField type="text" name="file_name" placeholder="File name" placeinside="File name" />

                                    <div className={styles.imageUp}>
                                        <label>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.121 13.5L2.106 13.515L2.09025 13.5H0.744C0.54661 13.4998 0.357373 13.4212 0.217867 13.2816C0.0783615 13.142 -1.00091e-07 12.9526 0 12.7552V0.74475C0.00137253 0.547784 0.0801752 0.359263 0.219385 0.219913C0.358594 0.0805634 0.547035 0.00157099 0.744 0H14.256C14.667 0 15 0.33375 15 0.74475V12.7552C14.9986 12.9522 14.9198 13.1407 14.7806 13.2801C14.6414 13.4194 14.453 13.4984 14.256 13.5H2.121ZM13.5 9V1.5H1.5V12L9 4.5L13.5 9ZM13.5 11.121L9 6.621L3.621 12H13.5V11.121ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6Z" fill="#6C7884"/>
                                            </svg>
                                            <input type="file" name="file_image" className={styles.file} />
                                        </label>
                                    </div>
                                    
                                    <Buttona text="UPLOAD"/>
                                </form>

                                
                            </div>
                            
                            <div className={styles.download}>
                                <div className={styles.head}>
                                    <h3>Hi Omopariola</h3>
                                    <Link to={url.signUp} className={styles.a}>Logout</Link>
                                </div>

                                <div className={styles.info}>
                                    <div className={styles.wrap_i}>
                                        <div className={styles.i}>
                                            <div className={styles.icon}>
                                                <span>12</span>
                                            </div>

                                            <div className={styles.desc}>
                                                <span>View all users</span>
                                            </div>
                                        </div>

                                        <div className={styles.i}>
                                            <div className={styles.icon}>
                                                <span>12</span>
                                            </div>

                                            <div className={styles.desc}>
                                                <span>Files in your stash</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.stash}>
                                    
                                </div>
                            </div>
                        </div>  
                            
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHome;