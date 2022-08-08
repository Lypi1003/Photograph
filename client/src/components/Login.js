export const Login =() =>{
    return(
        <div classsname="login-div">

            <form >
                <div class="container">
                    <h1>Login</h1>
                    <p>Please fill in this form to login.</p>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                    
                    <button type="submit" class="btn">Login</button>
                </div>

                <div class="container signin">
                    <p>No acount yet? <a href="/auth/register">Register</a>.</p>
                </div>
            </form>
        </div>
    );
}