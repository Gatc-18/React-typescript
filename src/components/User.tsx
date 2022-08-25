import { useState } from "react";

//creo mi prototipado
interface Usuario {
    uid: string;
    name: string;
}

const tempUser: Usuario = {
    uid: 'Hola',
    name: 'Holis Holis'
}


export const User = () => {
    const [user, setUser] = useState(tempUser)

    const Login = () => {
        setUser({
            uid: crypto.randomUUID(),
            name: 'Yudith Leon'
        })
    }
    return (
        <div className="m-5 d-flex justify-content-center">
            <div className="card" style={{width: '18rem'}}>
                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    );
};

