/* import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
  
  let validationErrors ={};
  if (!formData.name.trim()) {
    validationErrors.name = "Name is required";
  }
  if (!email.trim()) {
    validationErrors.email = "Email is required";
  }
  if (!password.trim()) {
    validationErrors.password = "Password is required";
  }
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    setErrors({});
    alert("Form submitted successfully!")
    console.log({username,email,password});

    setUsername("");
    setEmail(""); 
    setPassword("");
  }
};
    
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label >Name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => setUsername(e.target.value)}
      />
      {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
</div>

      <div> 
      <label>Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
      </div>

      <div>
      <label>Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
 */

import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      console.log({ username, email, password });

      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;