import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo2.png";
import "./register.css";

const RegisterPage = () => {
  return (
    <div className="register_container">
      <div className="logo_headings_div">
        <div>
          <Image src={logo} alt="nike logo" />
        </div>
        <div className="heading_one">BECOME A NIKE MEMBER</div>
        <div className="heading_two">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </div>
      </div>

      <div className="input_fields_div">
        <input
          type="email"
          className="basic_input"
          placeholder="Email Address"
        />
        <input type="password" className="basic_input" placeholder="Password" />
        <input type="text" className="basic_input" placeholder="First Name" />
        <input type="text" className="basic_input" placeholder="Last Name" />
        <input
          type="date"
          className="basic_input text_border"
          placeholder="Date of Birth"
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
   
          }}
        />

        <p className="birthday_text">
          Get a Nike Member Reward every year on your Birthday.
        </p>
        <select className="basic_input text_border">
          <option value="pakistan">Pakistan</option>
          <option value="india">India</option>
          <option value="uae">UAE</option>
        </select>
        <div className="gender_btn_div text_border">
          <button className="gender_btn">Male</button>
          <button className="gender_btn">Female</button>
        </div>
      </div>

      <div className="check_emailsignup_div">
        <input type="checkbox" style={{ width: "40px", height: "40px",accentColor: "white" }} />
        <label className="terms_conditions checkbox_label">
          Sign up for emails to get updates from Nike on products, offers and
          your Member benefits
        </label>
      </div>

      <p className="terms_conditions">
        By creating an account, you agree to Nike's{" "}
        <span style={{ textDecoration: "underline" }}> Privacy Policy</span> and{" "}
        <span style={{ textDecoration: "underline" }}> Terms of Use.</span>
      </p>
      <button className="register_btn">JOIN US</button>

      <p style={{ textAlign: "center", color: "#8D8D8D" }}>
        Already a Member?{" "}
        <Link
          href={"/pages/login"}
          style={{
            color: "black",
            fontWeight: "500",
            textDecoration: "underline",
          }}
        >
          Sign In.
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
