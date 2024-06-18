import React, { useState } from "react";

const Validation = () => {
  let [text, setText] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [number, setNumber] = useState("");
  let [error, setError] = useState(false);

  let SUBMIT = (e) => {
    e.preventDefault();

    if (
      text.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      number.length === 0
    ) {
      setError(true);
    } else {
      setText("");
      setEmail("");
      setPassword("");
      setNumber("");
      setError(false);
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={SUBMIT}>
          <div style={{ height: 65 }}>
            <input
              type="text"
              placeholder="search here.."
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {error && text.length === 0 ? (
              <p className="kkk">FIll this field</p>
            ) : (
              ""
            )}
          </div>

          <div style={{ height: 65 }}>
            <input
              type="email"
              placeholder="search here.."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && email.length === 0 ? (
              <p className="kkk">FIll this field</p>
            ) : (
              ""
            )}
          </div>

          <div style={{ height: 65 }}>
            <input
              type="password"
              placeholder="search here.."
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && password.length === 0 ? (
              <p className="kkk">FIll this field</p>
            ) : (
              ""
            )}
          </div>

          <div style={{ height: 65 }}>
            <input
              type="number"
              placeholder="search here.."
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            {error && number.length === 0 ? (
              <p className="kkk">FIll this field</p>
            ) : (
              ""
            )}
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Validation;
