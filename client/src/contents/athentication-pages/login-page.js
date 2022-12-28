import { Link } from "react-router-dom";
const Signin = ()=>{
    return(
        <>
            <p>i am from signin page</p>
            <h3>Signin</h3>
            <form method="post">
                <div>
                    <label htmlFor="userid">UserId</label>
                    <input type={"gmail"} id="userid"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type={"password"} id="password"></input>
                </div>
                <button>Login</button>
                <button><Link to={"/signup"}></Link></button>
                
            </form>
        </>

    )
}
export default Signin;