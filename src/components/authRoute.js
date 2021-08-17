import React, {useEffect, useState} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { callApi, apiConfigs } from '../adapter/common'


const AuthRoute = ({component: Component}, ...rest) => {
    const [approved, setApproved] = useState(true)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      async function req() {
        if(localStorage.user){
            let user = JSON.parse(localStorage.user)
            const res = await callApi('post', apiConfigs.apiUrl+'user/validatetoken.php', user)
            if(res.status === 200){
                setApproved(true)
                setLoading(false)
            }
            else{
                setApproved(false)
                setLoading(false)
            }
        }
        else{
            setApproved(false)
            setLoading(false)
        }
      }
      req()
    }, []);

    return (
        <Route {...rest} render= {(props) => {
            if(approved===false && loading===false){
                return <Redirect to={{
                    pathname: "/onboard/sign-in",
                    state: props.location
                }}/>
            } 
            else if(approved===true && loading===false){
                return <Component {...props}/>
            }
            else{
                return ''
            }
        }} />
    )
}

export default AuthRoute
