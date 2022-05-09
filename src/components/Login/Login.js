import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleToSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password?.value;
        console.log(email, password);

        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    navigate('/orders');
                }
                console.log(data);
            })
    }

    return (
        <section className='mx-auto mt-4' style={{ width: '500px' }}>
            <h1 className='text-center my-2'>Login</h1>
            <form onSubmit={handleToSubmit}>
                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary w-100 mx-auto mt-2">Submit</button>
            </form>
        </section>
    );
};

export default Login;