import Login from "../components/Login";
import SignUp from '../components/Signup';


const Connexion = () => {


    return (
        <div>
            <div className="logo header-connect" >
                <img src='./img/logo.png' alt="logo Groupomania" />   
            </div>
            <div className="log">
                <div className="contain-log">
                    <Login />
                    <button>Connexion</button>
                </div>
                <div className="contain-log">
                    <SignUp />
                    <button >Inscription</button>
                </div>
              
            </div>

        </div>
    );
};

export default Connexion;