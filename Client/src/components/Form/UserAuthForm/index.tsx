import './Form.css'


interface props {
    variant:string
    text:string
}

function Form({variant, text}:props) {
    return(
        <form className = {`form ${variant}`}>
            {variant === "signup" ? 
                <div className = "fullname-input">
                    <input
                        type = "text"
                        placeholder = "first name"
                        
                    />
                    <input
                        type = "text"
                        placeholder = "last name"
                    />
                </div> : null}
            <div className = {`registration-form ${variant}`} >
                <input 
                    type = "text"
                    placeholder = "username"
                />
                <input 
                    type = "text"
                    placeholder = "email"
                />
                <input 
                    type = "text"
                    placeholder = "password"
                />
                <p>Forgot your username or password?</p>
                <button className="user-auth-form-button">{text}</button>
            </div>
            {variant === "signin" ?
                <div className = "underline-button-div">
                    <span>Dont have an account?</span> <button className = "underline-button">Create one</button>
                </div> :
                <div className = "underline-button-div">
                    <span>Already have an account?</span> <button className = "underline-button">Sign in</button>
                </div>
            }
        </form>
    )
}

export default Form