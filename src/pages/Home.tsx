import './../App.css'
import pfp from '../assets/dp.png'
import l from '../assets/linkedin.svg'
import arrow_long from '../assets/arrow.svg'
import git_hub from '../assets/git.svg'
import codingninjas from '../assets/codingninjas.svg'
import Clouds from './components/Clouds'
import {motion} from "framer-motion"
// import { cubicBezier } from "framer-motion"
import ham from "../assets/ham.svg"
import web from "../assets/web.png"



// import emailjs from '@emailjs/browser';

function Home() {

  // const [count, setCount] = useState(0)
  
  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
  
    },

    initial2: {
      scale: 0,
      opacity: 0,
    },

    animate2: {
      scale: 1,
      opacity: 1,
      // transition: {
      //   ease: [0.68, -0.55, 0.265, 1.55],
      // },
      
    },

    move: {
      
      translateY: "20px",
      scale: 1,

    }
  
  };
  
  return (

    <>
      <body>
        <div className='wrapper'>
          <div id="bg">
            <nav>
              <h1 className="title">  Portfolio  </h1>
              <ul className="sections">
                <li><a href="#home">Home</a></li>
                <li><a href="https://github.com/Aruliya">Projects</a></li>
                <li><a href="https://drive.google.com/file/d/1B9fFNV2WqlHgUFsR-4NSMISI8uqxhM3F/view?usp=sharing">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <button className="hiButton">
                <a href="#contact">
                Say hi!
                </a>
              </button>
              <img className="hamicon" src={ham} alt="ham icon"/>
            </nav>
            <div id="home" className="content">
              <div className="desc">
                <h1 className="heading" >Greetings, I'm </h1><br/>
                <motion.h1 className="name" variants={variants} initial="initial2" whileInView="animate2" transition={{delay:0.4, duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55],}} viewport={{ once: true }}>Aruliya Asokan</motion.h1><br/>
                <p>I am a motivated and dedicated individual with a passion for becoming a proficient Full Stack Web Developer. I have a solid foundation in HTML and CSS and am actively expanding my skills in JavaScript through hands-on experience. Additionally, I am familiar with React.js, which adds a dynamic edge to my toolkit. I am eager to contribute to and grow within dynamic development environments.</p>
                <div className="links">
                  <a href="https://www.linkedin.com/in/aruliya-asokan-1b857724b/" ><img src={l} alt="linkedin_logo" width="20" height="20"/></a>
                  <a href="https://github.com/Aruliya"><img src={git_hub} alt="github_logo" width="20" height="20"/></a>
                  <a href="https://www.naukri.com/code360/profile/e0732517-cf49-4a6a-b7e9-64bd52c8c843"><img src={codingninjas} alt="instagram_logo" width="20" height="20"/></a>

                </div>
                <a href ="#section2">
                <motion.img id="longarrow" className="arrow" src={arrow_long} alt="long down arrow" width="40" height="100" variants={variants} whileHover="move" whileTap="tap" />
                </a>
                
              </div>

              <div className="img_bg">
                <div className="circle1"></div>
                <motion.img className="pfp" src={pfp} alt="profilepic" variants={variants} initial="initial2" whileInView="animate2" transition={{duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55],}} viewport={{ once: true }} />
                
              </div>
            </div>
          </div>

          <section id="section2" className="sec2">
          <motion.img className="sec2_img" src={web} alt="webdev" variants={variants} initial="initial2" whileInView="animate2" transition={{delay:0.001}} viewport={{ once: true }} />
            <motion.div  variants={variants} initial="initial2" whileInView="animate2" transition={{delay:0.2}} viewport={{ once: true }} >
              <motion.h1 >ABOUT ME</motion.h1><br/>
              <motion.p>A 2nd year student doing B.Tech in Electronics and Communication Engineering at S.R.M. UNIVERSITY, KTR Campus, Chennai.
              </motion.p> <br/> <br/>
              <motion.h1 >SKILLS</motion.h1><br/>
              <ul style={{display: "flex", gap: "2em"}}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Python</li>
                </ul>
                <br/>

                <ul style={{display: "flex", gap: "2em"}}>
                  <li>Git</li>
                  <li>VScode</li>
                  <li>GitHub</li>
                </ul>
            </motion.div>
            
          </section>


          <Clouds />
          
          <section id ="further" className="sec3">
            <div className="text1">
              FURTHER
            </div>
            
          </section>

          <section className="sec4">
            
            <div className="text2">
              <h1 >PROJECTS</h1><br/>
              <ul>
                <li>Built my portfolio website in React.js with Advanced CSS, incorporating visually appealing and interactive components with creative animations.</li><br/>
                <li>Gained a solid understanding of React concepts such as component architecture and integrated third-party libraries like Framer Motion for animations.</li> <br/>
                <li>Developed static webpages including a Netflix clone, a Google sign-up page using HTML, CSS, and Bootstrap, a Reddit login page, and a full parallax website using advanced CSS.</li><br/>
                <li>Created a basic To-Do List web app using HTML, CSS, and JavaScript, and a Basic FetchAPI using Node.js.</li>
              </ul>
              
            
             
            </div>

              
            
          </section>

          <section id="contact" className="sec5">
          <motion.div className="text3" variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.h1 className="h1_tag" variants={variants}>Let's</motion.h1>
              <motion.h1 className="h1_tag" variants={variants}>Connect</motion.h1>
              <br/><br/>
              <motion.h3 variants={variants}>Mail</motion.h3>
              <motion.p variants={variants}>aruliyaasokan@gmail.com</motion.p>
              <br/><br/>
              <motion.h3 variants={variants}>Address</motion.h3>
              <motion.p variants={variants}>xyz</motion.p>
              <br/><br/>
              <motion.h3 variants={variants}> Phone</motion.h3>
              <motion.p variants={variants}> +123XXXX</motion.p>
            </motion.div>
            
            <div className='formContainer'>
              <motion.div className='phonesvg' initial={{opacity:1}} whileInView={{opacity:0, zIndex: -1}} transition={{delay:2, duration:0.5}} >
                <svg className="phonecall" width="450px" height="450px" viewBox="0 0 32.666 32.666">
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{pathLength:0}}
                  whileInView={{pathLength: 1}}
                  transition={{duration:3}}

                  d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                  M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                  C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                  c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                  c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                  c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                  c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                  c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                  c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                  c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                  c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                  l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                  C32.666,7.326,25.339,0,16.333,0z"
                  />
                </svg>
              </motion.div>

            <motion.form className="fill" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2, duration:1}} >
              <input className="f_name" type="text" placeholder='Name' name="name" /><br/>
              <input className="f_email" type="text" placeholder='Email' name="email" /><br/>
              <textarea rows={8} className ="f_message" placeholder='Message' name="message" /><br/>
              <button className="f_submit" >Submit</button>
              
            </motion.form>
            </div>

          </section>
           
          <section className="sec6">
          Copyright © 2024 Aruliya /\/ Aruniya Asokan

          </section>

        </div>

      </body>





    </>

  )
}



export default Home
