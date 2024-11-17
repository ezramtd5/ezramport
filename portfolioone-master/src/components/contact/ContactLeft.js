import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ezra Mekuria Tessema</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer || Database Engineer || Full Stack Developer || UI Designer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Ready to turn ideas into solutions? Let's collaborate! Whether you have questions or a project you're looking to get done, I'm here to help. Reach out, and let's create something amazing together!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+251945762877</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ezramekuriatessema@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href="https://instagram.com/ezramtd6" target="blank">
          <span className="bannerIcon">
            <FaInstagram />
          </span>
          </a>
          <a href="https://facebook.com/ezramtd6" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://twitter.com/ezramtd6" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ezramtd6" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft