import React from "react";
import style from "../css/CreateNewUser.module.css";
import { Link } from "react-router-dom";

function CreateNewUser() {
  return (
    <div>
      <Link to="/createuser" className={style.para}>
        Create User
      </Link>
    </div>
  );
}

export default CreateNewUser;
