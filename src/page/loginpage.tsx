function loginpage(){
    return (

        <div className="box container row">
            <div className="tital-box  ">
                <img src="src\image\Facebook-Logo-2019.png" alt=""/>
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="form-box ">
                <form action="#">
                    <input type="text" placeholder="Email or phone number"></input>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit">Log In</button>
                    <a href="#">Forgotten password?</a>
                </form>

                <hr></hr>
                <div className="create-btn">
                    <a href="#">Create New Account</a>
                </div>

            </div>

        </div>
    );
}

 export default loginpage