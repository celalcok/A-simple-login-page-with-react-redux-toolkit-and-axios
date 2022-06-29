import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { getData } from "../../redux/loginSlice";
function Profile() {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <div>
      <Header />
      <div className="page profile">
        <h1>Profile</h1>

        <p>{name}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
