import LogoLoop from '../../LoopLogo/LogoLoop';
import './Skills.css';
import React from 'react';
import { SiReact,SiAdobephotoshop,SiDjango,SiPython,SiAdobeillustrator,SiPhp,SiMysql} from 'react-icons/si';
import { FaGitSquare,FaGithubSquare} from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaLaravel,FaAws } from "react-icons/fa6";
import BlurText from "../../Blurtext/BlurText";

const techLogos = [
  { node: <SiReact />, title: "React"},
  { node: <SiDjango />, title: "Django"},
  { node: <SiPython />, title: "Python"},
  { node: <SiPhp />, title: "PHP"},
  { node: <TiHtml5/>, title: "CSS3"},
  { node: <FaLaravel />, title: "Laravel"},
  { node: <FaGitSquare />, title: "Git"},
  { node: <FaGithubSquare />, title: "GitHub"},
    { node: <FaAws />, title: "AWS"},
    { node: <SiMysql />, title: "MySQL"},
 
  { node: <SiAdobephotoshop />, title: "Photoshop"},
  { node: <SiAdobeillustrator />, title: "Illustrator"},
  
];

function Skills() {
  return (
    <>
    <div className="   container-fluid " >
    <div className="title text-start mt-5" style={{padding:'6%' }}>
      <BlurText
       text="Skills"
       className=" cert-title ms-auto  "
       animateBy="words"
       delay={120}
       direction="top"
      />
    </div>

    <div  style={{ height: '200px', position: 'relative', overflow: 'hidden',}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000ff"
        ariaLabel="Technology partners"
      />
      
      
     
    </div>
    </div>
    </>
  );
}
export default Skills;