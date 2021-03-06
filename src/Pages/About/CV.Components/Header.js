import React from 'react'
import { FaGithub, FaLinkedin  } from 'react-icons/fa'
import { MdPhone, MdMyLocation } from 'react-icons/md'

export default function Header() {
    return (
        <header className="header container-fluid">
          <div className="he-right">
            <div className="name">Youssef Rashad</div>
            <div className="job">Software Engineer</div>
          </div>
  
  
          <div className="body-point">
            <div className="head-point">
              <span className="icon-contact"><MdMyLocation /></span>
              <span className="name-contact"> 15 El Tohed ST, El Warraq, Giza, Egypt</span>
            </div>
            
              <div className="cont-body">
                <span className="icon-contact"><MdPhone /></span>
                <span className="name-contact phone"> +20 112-672-8146</span>
                <span> | </span>
                <span className="icon-contact">✉</span>
              <span className="name-contact"> <a href="mailto:youssefrashad119@gmail.com" className="link text-decoration-none live-serverX">youssefrashad119@gmail.com</a> | </span>
                <span className="icon-contact">✉</span>
              <span className="name-contact"> <a href="mailto:youssefrashad119@gmail.com" className="link text-decoration-none  live-serverX">youssefrashad19@yahoo.com</a> | </span>
                <span className="icon-contact linkedIn"><FaLinkedin /> </span>
                <span className="name-contact">
                <a href="https://linkedin.com/in/youssef-rashad-92b597156" target="_blank" className="link text-decoration-none live-serverX" rel="noopener noreferrer">LinkedIn </a> 
                | </span>
                <span className="icon-contact github"><FaGithub /> </span>
                <span className="name-contact"><a href="https://github.com/YoussefRashad" target="_blank" className="link text-decoration-none live-serverX" rel="noopener noreferrer">GitHub</a></span>
              </div>
  
          </div>
        </header>
      );
}
