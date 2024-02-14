import "../adminstyles/AdminSignin.css";
import { useHistory, withRouter } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { setAdminToken } from "../../redux/action";
import axios from "axios";
function AdminSignin({ setAdminToken, history }) {
  //signin
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setName(e.target.value);
  };
  // const history = useHistory();
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmitSignin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/adminLogin",
        {
          username: name,
          password: password,
        }
      );
      console.log("Admin Token:", response.data.token);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("adminname", response.data.admin.usename);

      console.log(response.data.admin.username);
      setAdminToken(response.data.token);
      history.push({
        pathname: "/alladmin",
        state: {
          token: response.data.token,
          usename: response.data.admin.usename,
        },
      });
      alert("Login Successful.");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="sign-page">
      <div>
        <form className="box" onSubmit={handleSubmitSignin}>
          <h2>
            <br /> Event_Manager
          </h2>
          <p>Get your events managed...</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <button className="signin-button">SignIn</button>
        </form>
      </div>
    </div>
  );
}
// export default AdminSignin;
const mapDispatchToProps = (dispatch) => ({
  setAdminToken: (token) => dispatch(setAdminToken(token)),
});
export default connect(null, mapDispatchToProps)(withRouter(AdminSignin));
