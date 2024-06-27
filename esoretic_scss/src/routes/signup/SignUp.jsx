import './signup.scss'
import {Link, useNavigate} from 'react-router-dom'
import apiRequest from '../../lib/apiRequest'
import { useState } from 'react'

function SignUp() {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    //注册成功后，跳转到登录页面
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent the page from refreshing,不然后端的res不会返回到前端
        setIsLoading(true);
        setError("");
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        
        try {
            const res = await apiRequest.post('/auth/register', {
                username: username,
                email: email,
                password: password
            })
            
            console.log(res.data)
            navigate('/welcome/signin') 
        } catch (error) {
            console.log(error)
            setError(error.response.data.message)
        } finally {
            setIsLoading(false);
        }

    }
    return (
        <div className="signup">
            <div className="bgImg">
                <img src="https://images.unsplash.com/photo-1548276332-76fd45e25952?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

            <div className="signupContainer">

                <form onSubmit={handleSubmit}>
                    <h1 className='title'>Register Now</h1>
                    <div className="input">

                        <input name="username" type="text" id="username" placeholder='Username'/>
                    </div>
                    <div className="input">

                        <input name="email" type="email" id="email" placeholder='Email'/>
                    </div>
                    <div className="input">

                        <input name="password" type="password" id="password" placeholder='Password'/>
                    </div>
                    
                    <button disabled={isLoading}>Sign Up</button>
                </form>
                
                
                {error && <span className='errMsg'>{error}</span>}
                <div className="goSignin">
                    <p>Already have an account?</p>
                    
                    {/* <a href='/welcome/signin'>Login Here</a> */}
                    <Link to='/welcome/signin'>Login Here</Link>
                </div>
            </div>


        </div>
        
    )
}

export default SignUp