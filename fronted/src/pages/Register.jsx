import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              onChange={onChange}
              value={name}
              id="name"
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <input
              onChange={onChange}
              id="email"
              value={email}
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={onChange}
              id="password"
              value={password}
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <input
              onChange={onChange}
              id="password2"
              type="password"
              name="password2"
              value={password2}
              className="form-control"
              placeholder="Confirm password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
