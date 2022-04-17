import ReactDOM from "react-dom";
import React from "react";
import './App.css';


//remdered by react by default in the index.js file
function App() {
    return (
        <div className="App">
            <div class="form-block-wrapper"></div>
            <div className={'form'}>
                <section class="form-block">
                    <header class="header-form-block">
                        <h1> Login</h1>
                    </header>
                    <form>
                        <label> Username</label>
                        <div className={"username"}>
                            <input type={'text'}/>

                        </div>
                        <label> Password</label>
                        <div className={"password"}>
                            <input type={'password'}/>
                        </div>
                        <button class="button button-login" type={"submit"}>Log In</button>

                    </form>
                </section>
            </div>
        </div>
    );
}

export default App;

