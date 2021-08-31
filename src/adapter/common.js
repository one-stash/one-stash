import axios from 'axios'
import swal from 'sweetalert'

export const callApi = async(method, path, dataObj) => {
    try{
        return await axios({
            method: method,
            url: path,
            data: dataObj
        })
    }
    catch(e){
        return e.response
    }
}

export const s = (hText) =>{
    swal({
        title: hText,
        icon: "success"
    })
}

export const e = (hText) =>{
    swal({
        title: hText,
        icon: "warning"
    })
}

export const swr = (hText) =>{
    swal({
        title: hText,
        icon: "error"
    })
}



export const url = {	
	home: '/',

	//onboard
	signUp: '/onboard/admin/add-user',
    signIn: '/onboard/sign-in',
    aEntry: '/onboard/admin-entry',
    //
	
	//1:dashboard home
	dashHome: '/dashboard/user/home',
	adminHome: '/dashboard/admin/home',
}

export const apiConfigs = {
    "baseUrl": "http://1stash.netlify.app/#/",
    // "baseUrl": "http://127.0.0.1:3000/#/",
    "apiUrl": "https://onestashapi.azurewebsites.net/api/",
    "apiHeroku": "https://onestashapi.herokuapp.com/api/"
}
