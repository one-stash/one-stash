import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import check from "../../assets/images/check.svg";

import styles from "../../styles/onboard/sign_in.module.scss";

import { connect } from 'react-redux'
import { loginUser, setLoading, clearMsg } from '../../actions/authActions'
import { url } from '../../config'

const SignIn = ({
	loginUser,
	setLoading,
	error_msg,
	loading,
	success_msg,
	user,
	clearMsg,
	userToken,
}) => {
	const { register, handleSubmit, errors, reset } = useForm()
	useEffect(() => {
		clearMsg()
	}, [])

	if (userToken !== null) {
		//'/username/dashboard/home'
		return <Redirect to={url.dashHome} />
	}

	const onSubmit = (data) => {
		setLoading()
		const userData = {
			email: data.email,
			password: data.password,
		}
		loginUser(userData, reset)
	}        
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
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                            </svg>
                        </Link>                        

                        <Link to="#0">
                            Help?
                        </Link>
                    </div>

                    <h5 className={styles.h5}>
                        Yay! you came back.
                    </h5>

                    <form method='post' onSubmit={handleSubmit(onSubmit)}>

                        <div className={styles.input_container}>
                            <div className={styles.input_content}>
                                <input name="email" type="email" placeholder="Email address" ref={register({
								    required: 'email is Required',
                                })} />
                                {errors.email && (
                                    <small className={styles.errorMsg}>*{errors.email.message}</small>
                                )}
                                <label>Email address</label>
                            </div>
                        </div>

                        <div className={styles.input_container}>
                            <div className={styles.input_content}>
                                <input name="name" type="password" placeholder="Password" ref={register({
								    required: 'password is required',
								    minLength: { value: 6, message: 'password is too short' },
                                })} />
                                {errors.password && (
							        <small className={styles.errorMsg}>*{errors.password.message}</small>
						        )}
                                <label>Password</label>
                            </div>
                        </div>

                        {/*  */}
						{loading ? (
							<div className={styles.sendComp}>Loading</div>
						) : error_msg === null && success_msg === null ? (
							<button type='submit'>
                                Sign In
                            </button>
						) : error_msg !== null ? (
							<>
                                <small className={styles.errorMsg}> {error_msg} </small>
								<button type='submit'>
                                    Sign In
                                </button>
							</>
						) : (
							<div className={styles.sendSuccess}>{success_msg}</div>
						)}
						{/*  */}
                    </form>

                    <div className={styles.terms}>
                        <a href="#0" target="_blank" class="tiny-link">Forgot Password?</a>.
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
	user: state.authReducer.user,
	userToken: state.authReducer.userToken,
})
export default connect(mapStateToProps, { loginUser, setLoading, clearMsg })(
	SignIn
)