const Signup = ()=>{
    return(
        <>
            <p>i am from signup page</p>
            <h3>Signup</h3>
            <form method="post">
                <div>
                    <label htmlFor="userid">UserId</label>
                    <input type={"gmail"} id="userid"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type={"password"} id="password"></input>
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type={"password"} id="confirm-password"></input>
                </div>
                <button>Signup</button>
                
            </form>
        </>

    )
}
export default Signup;