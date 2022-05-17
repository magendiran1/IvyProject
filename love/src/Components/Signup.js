
import './Signup.css'

const SignUp = () => {
    return (
        <div className="container">
            <div className='screen'>
<form className='login'>
<div className='input-field'>
<i className="fas fa-user"></i>
<input type="text" required="" placeholder='User name / Email' />
</div>
<div className='input-field'>
<i className='fas fa-lock'></i>
<input type="password" required="" placeholder="Password" />
</div>
</form>
            </div>

        </div>
    )
}

export default SignUp;