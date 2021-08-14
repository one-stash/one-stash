import React, { useState } from "react"
import { Link } from 'react-router-dom'

import check from "../../assets/images/check.svg";

import styles from "../../styles/onboard/sign_in.module.scss";

function SignIn() {
        
    // const [active, setActive] = useState{false}

    return(
        <>
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
                                <h3>Join 3,200+ Designers</h3>
                                <p>Connect with over 3,200+ UX/UI designers</p>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Join 3,200+ Designers</h3>
                                <p>Connect with over 3,200+ UX/UI designers</p>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Join 3,200+ Designers</h3>
                                <p>Connect with over 3,200+ UX/UI designers</p>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <img src={check} alt="" />
                            <div className={styles.text}>
                                <h3>Join 3,200+ Designers</h3>
                                <p>Connect with over 3,200+ UX/UI designers</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.form}>
                    <div className={styles.form_nav}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                        </svg>

                        <Link to="/sign-up">
                            Join
                        </Link>
                    </div>

                    <h5 className={styles.h5}>
                        Join 1Stash for free
                    </h5>

                    <form>

                        <div className={styles.input_container}>
                            <div className={styles.input_content}>
                                <input name="name" type="text" placeholder="Email address" />
                                <label>Email address</label>
                            </div>
                        </div>

                        <div className={styles.input_container}>
                            <div className={styles.input_content}>
                                <input name="name" type="password" placeholder="Password" />
                                <label>Password</label>
                            </div>
                        </div>

                        <button type="submit">
                            Sign Up
                        </button>
                    </form>

                    <div className={styles.terms}>
                        By clicking the "SIGN UP" button you agree to Memorisely's <a href="/terms-of-service" target="_blank" class="tiny-link">Terms of Use</a> and <a href="/privacy-policy" target="_blank" class="tiny-link">Privacy Policy</a>.
                    </div>
                </div>
            </section>
        </>
    );
}        

export default SignIn;