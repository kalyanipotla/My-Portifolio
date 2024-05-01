import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
const About = () => {
  return (
<>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-10 md:mx-20 lg:mx-32 mt-28 md:mt-5 lg:mt-28 sm:mt-3">
  <div>
    <h1 className='text-3xl lg:text-4xl md:text-3xl sm:text-3xl font-semibold mr-4'>About Me</h1>
    <h3 className='mt-5 text-3xl lg:text-3xl md:text-2xl sm:text-xl font-bold '>I'm Kalyani Potla 
      <span className='text-[#ff0080]'>(Software Engineer)</span></h3>
    <p className='mt-5'>Hi, I born and brought up in Guntur, A.P . I'm having
experience in Frontend Development . I'm hardworking and
Self-motivated person with excellent communication skill and
expert in different phases of development of software in market demanding latest different technologies.</p>
<Link to="/contact"><button type="button" style={{  width:"110px"}}className="mt-10 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
 Hire Me
</button></Link>
  </div>
  <div>
  <Tabs>
    
      <Tab>Skills  </Tab>
      <Tab>Experience</Tab>
      <Tab>Education</Tab>
      <Tab>Personal Detail</Tab>

    <TabPanel>
    <div className="App">

            <h3 className="heading font-semibold mt-5">HTML</h3> 
            <ProgressBar completed={90} />
            <br/>
            <h3 className="heading font-semibold">CSS</h3> 
            <ProgressBar completed={80} /> <br/>
            <h3 className="heading font-semibold">Bootstrap</h3> 
            <ProgressBar completed={80} /> <br/>
            <h3 className="heading font-semibold">Tailwindcss</h3> 
            <ProgressBar completed={80} /> <br/>
            <h3 className="heading font-semibold">Javascript</h3> 
            <ProgressBar completed={70} /> <br/>
            <h3 className="heading font-semibold">React Js</h3>
            <ProgressBar completed={70} /> <br/>
            <h3 className="heading font-semibold">Figma</h3>
            <ProgressBar completed={75} /> <br/>
            

        </div>
    </TabPanel>
    <TabPanel>
      <h2 className='text-[#ff0080] text-2xl font-semibold mt-5'>Role : Frontend Developer (Feb-2023 - Jan-2024) </h2> 
      <p className='mt-3'>I have  1 year experience of frontend developer with reactjs in Gravitonweb Technologies from Banglore.I make responsive website designs and dynamic websites </p>
      <h1 className=' text-xl mt-3'><span className='text-[#ff0080] text-3xl font-semibold'>Skills:</span> HTML, CSS, Bootstrap,Tailwindcss, Reactjs</h1>
      <h1 className=' text-3xl mt-5'>Open To Work</h1>
    </TabPanel>
    <TabPanel>
      <h2 className='text-[#ff0080] text-2xl font-semibold'>B.Tech (Electronics and Communication Engineering)</h2>
      <p>I did my B.Tech in ECE with 7.5CGPA from Chalapathi Institute Of Engineering and Technology College, Guntur.</p>
      <h2 className='text-[#ff0080] text-2xl font-semibold'>12th (Intermediate)</h2>
      <p>I have completed Intermediate in M.P.C (MPC-Maths, physics, chemistry) from Guntur </p>
      <h2 className='text-[#ff0080] text-2xl font-semibold'>10th (High School)</h2>
      <p>I have completed 10th in General Subjects  from Karthikeya Concept School in Gurazala</p>
    </TabPanel>
    <TabPanel>
      <h3><span  className='text-[#ff0080] text-xl font-semibold'>Birthday </span>: 24 March 1999</h3>
      <h3><span className='text-[#ff0080] text-xl font-semibold'>City</span> : Hyderabad (Telagana)</h3>
      <h3><span className='text-[#ff0080] text-xl font-semibold'>Degree</span>: Bachelor Of Technology (ECE)</h3>
      <h3><span className='text-[#ff0080] text-xl font-semibold'>Email</span> : kalyanipotla123@gmail.com</h3>
      <h3><span className='text-[#ff0080] text-xl font-semibold'>Linkedin</span> : www.linkedin.com/in/potla-kalyani-112352216</h3>
      <h3><span className='text-[#ff0080] text-xl font-semibold'>Phone</span> :  +91 6300216971</h3>
    </TabPanel>
  </Tabs>
  </div>
  <div>
    
  </div>
</div>
</>
  )
}

export default About