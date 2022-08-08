export const Register = () => {
    return (
        <div classsname="register-div">

            <form >
                <div class="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    <p>By creating an account you agree to our <a href="/terms">Terms and Privacy</a>.</p>
                    <button type="submit" class="registerbtn">Register</button>
                </div>

                <div class="container signin">
                    <p>Already have an account? <a href="/auth/login">Sign in</a>.</p>
                </div>
            </form>
        </div>
    );
}