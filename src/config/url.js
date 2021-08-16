const app_url = 'http://127.0.0.1:3000/'
// const app_url = 'https://1stash.netlify.app/'

export const url = {
	// landingpage
	base: app_url,
	home: '/',

	//onboard
	signUp: '/onboard/sign-up',
	signIn: '/onboard/sign-in',
	//

	// dashboard
	dash_base: '/dashboard/',
	//1:dashboard home
	dashHome: '/dashboard/home',
	//2:project
	projAdd: '/dashboard/project',
	//3:add
	addView: '/dashboard/add',
	//4: resume
	resumeView: '/dashboard/resume',
	//5:setting
	settingView: '/dashboard/settings',
}

const remote_url = 'https://portfolio.deesuntech.com.ng/api/v1/'
// const remote_url = 'http://127.0.0.1:8000/api/v1/'
export const remote = {
	//1: education ::  @post @put @delete
	education: remote_url + 'dashboard/educations',
	//2: work
	work: remote_url + 'dashboard/works',
	//3: project
	project: remote_url + 'dashboard/projects',
	//6: social
	social: remote_url + 'dashboard/socials',
	//7:  onboard
	signUp: remote_url + 'register', //
	signIn: remote_url + 'login', //	
}
