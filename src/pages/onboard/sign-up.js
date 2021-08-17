import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import check from "../../assets/images/check.svg";

import styles from "../../styles/onboard/sign_up.module.scss";

import { connect } from 'react-redux'
import { registerUser, setLoading, clearMsg } from '../../actions/authActions'
import { url } from '../../config'

const SignUp = ({
	registerUser,
	setLoading,
	loading,
	error_msg,
	success_msg,
	clearMsg,
	userToken,
}) => {
	useEffect(() => {
		clearMsg()
	}, [])
	const { register, handleSubmit, errors, reset } = useForm()
	// submit function
	// console.log(window.btoa('me.pariola@gmail.com'))
	const onSubmit = (data) => {
		setLoading()
		const userData = { 
			first_name: data.first_name,
			last_name: data.last_name,
			email: data.email,
			company_name: data.company_name,
			password: data.password,
		}
		// console.log(url.liveVerifyEmail)
		registerUser(userData, reset)
	}
	if (userToken !== null) {
		//'/username/dashboard/home'
		return <Redirect to={url.dashHome} />
    }
    
    return(
        <>
            <section className={styles.sign_up}>
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
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                            </svg>
                        </Link> 

                        <Link to="{url.signIn}">
                            Login
                        </Link>
                    </div>

                    <h5 className={styles.h5}>
                        Join 1Stash for free
                    </h5>

                    <form method='post' onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.input_container}>
                            <div className={styles.input_content}>
                                <input name="first_name" type="text" placeholder="First name" ref={register({
								    required: 'first name is required',
                                })} />

                                {/* Frontend validation error::Username */}
                                {errors.first_name && (
                                <small className={styles.errorMsg}>*{errors.first_name.message}</small>
                                )}

                                {/* backend validation error::Username */}
                                {error_msg !== null && error_msg.first_name && (
                                    <small className={styles.errorMsg}>*{error_msg.first_name}</small>
                                )}
                                <label>First name</label>
                            </div>
                        </div>

                        <div className={styles.input_container}>
                            <div className={styles.input_content}>
                                <input name="last_name" type="text" placeholder="Last name" ref={register({
								    required: 'last name is required',
                                })} />

                                {/* Frontend validation error::Username */}
                                {errors.last_name && (
                                <small className={styles.errorMsg}>*{errors.last_name.message}</small>
                                )}

                                {/* backend validation error::Username */}
                                {error_msg !== null && error_msg.last_name && (
                                    <small className={styles.errorMsg}>*{error_msg.last_name}</small>
                                )}
                                <label>Last name</label>
                            </div>
                        </div>

                        <div className={styles.input_container}>
                            <div className={styles.input_content}>
                                <input name="email" type="email" placeholder="Email address" ref={register({
								    required: 'email is required',
                                })} />

                                {/* Frontend validation error::Username */}
                                {errors.email && (
                                <small className={styles.errorMsg}>*{errors.email.message}</small>
                                )}

                                {/* backend validation error::Username */}
                                {error_msg !== null && error_msg.email && (
                                    <small className={styles.errorMsg}>*{error_msg.email}</small>
                                )}
                                <label>Email address</label>
                            </div>
                        </div>

                        <div className={styles.input_container}>
                            <div className={styles.input_content}>
                                <input name="company_name" type="text" placeholder="Company name" ref={register({
								    required: 'company name is required',
                                })} />

                                {/* Frontend validation error::Username */}
                                {errors.company_name && (
                                <small className={styles.errorMsg}>*{errors.company_name.message}</small>
                                )}

                                {/* backend validation error::Username */}
                                {error_msg !== null && error_msg.company_name && (
                                    <small className={styles.errorMsg}>*{error_msg.company_name}</small>
                                )}
                                <label>Company name</label>
                            </div>
                        </div>

                        <div className={styles.input_container}>
                            <div className={styles.input_content}>
                                <input name="password" type="password" placeholder="Password" ref={register({
                                    required: 'password is required',
                                    minLength: { value: 6, message: 'password is too short' },
                                })} />

                                {/* Frontend validation error::Username */}
                                {errors.password && (
                                <small className={styles.errorMsg}>*{errors.password.message}</small>
                                )}

                                {/* backend validation error::Username */}
                                {error_msg !== null && error_msg.password && (
                                    <small className={styles.errorMsg}>*{error_msg.password}</small>
                                )}
                                <label>Password</label>
                            </div>
                        </div>

                        {/*  */}
						{loading ? (
							<div className={styles.sendComp}>Loading</div>
						) : error_msg === null && success_msg === null ? (
							<button type='submit'>
                                Sign Up
                            </button>
						) : error_msg !== null ? (
							<>
								<button type='submit'>
                                    Sign Up
                                </button>
							</>
						) : (
							<div className={styles.sendSuccess}>{success_msg}</div>
						)}
						{/*  */}
                    </form>

                    <div className={styles.terms}>
                        By clicking the "SIGN UP" button you agree to 1stash's <a href="/terms-of-service" target="_blank" class="tiny-link">Terms of Use</a> and <a href="/privacy-policy" target="_blank" class="tiny-link">Privacy Policy</a>.
                    </div>
                </div>
            </section>
        </>
    );
}        

const mapStateToProps = (state) => ({
	loading: state.authReducer.loading,
	error_msg: state.authReducer.error_msg,
	success_msg: state.authReducer.success_msg,
	userToken: state.authReducer.userToken,
})
export default connect(mapStateToProps, { registerUser, setLoading, clearMsg })(
	SignUp
)