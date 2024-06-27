import './signin.scss'
import '../../lib/apiRequest'
import {Link} from 'react-router-dom'
import apiRequest from '../../lib/apiRequest'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent the page from refreshing,不然后端的res不会返回到前端
        setIsLoading(true);

        setError(""); // 这个是为了每次提交表单时，清空之前的错误信息
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        
        try {
            const res = await apiRequest.post('/auth/login', {
                email: email,
                password: password
            })
            
            localStorage.setItem('user', JSON.stringify(res.data));
            console.log(res.data)
    
            navigate('/home') 
        } catch (error) {
            console.log(error)
            setError(error.response.data.message)
        } finally {
            setIsLoading(false);
        }

    }
    return (
        <div className="signin">
            <div className="bgImg">
                <img src="https://images.unsplash.com/photo-1548276332-76fd45e25952?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

            <div className="signinContainer">

                <form onSubmit={handleSubmit}>
                    <h1 className='title'>Sign In</h1>
                    <div className="input">

                        <input name="email" type="email" id="email" placeholder='Email'required minLength={3} maxLength={20}/>
                    </div>
                    <div className="input">

                        <input name="password" type="password" id="password" placeholder='Password' required minLength={6} maxLength={8}/>
                    </div>
                    <button disabled={isLoading}>Sign In</button>
                </form>
                
                <div className="forgotPassword">
                    {/* <a href='/welcome/resetPassword'>Forgot Password?</a> */}
                    <Link to='/welcome/resetPassword'>Forgot Password?</Link>
                </div>

                <div className="goRegister">
                    <p>Don't have an account?</p>
                    
                    {/* <a href='/welcome/signup'>Register Here</a> */}
                    <Link to='/welcome/signup'>Register Here</Link>
                </div>
                {error && <span className='signInerrMsg'>{error}</span>}
            </div>
            
        </div>
    )
}

export default Signin