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

const app_url = 'http://127.0.0.1:3000/'

export const url = {
	base: app_url,
	home: '/',

	//onboard
	signUp: '/onboard/admin/add-user',
    signIn: '/onboard/sign-in',
    //
	
	//1:dashboard home
	dashHome: '/dashboard/home',
}

export const apiConfigs = {
    "baseUrl": "https://web.elpisacademy.us/#/",
    "apiUrl": "https://elpis.footyfansfc.com/api/"
}
