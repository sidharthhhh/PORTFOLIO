import React from 'react'
import './skills.css';
import mongo from '../../assets/mongo.jpg';
// import c from '../../assets/c.png';
import css from '../../assets/css3.png';
import js from '../../assets/js.png';
import node from '../../assets/noode.png';
import html from '../../assets/html.png';
import java from '../../assets/java.jpg';
import git from '../../assets/git.png';
import express from '../../assets/express.jpg';
import react from '../../assets/react.png';
const Skills = () => {
     const skill=[
        {
         name:'HTML',
         border:'#a9b9cb',
         image:html
        },
        {
         name:"CSS3", 
         border:'#264de4',
         image:css
        },
        {
         name:"MongoDB",
         border:'#1a4674',
         image:mongo
        },
       
        {
         name:"JAVASCRIPT",
         border:'#f7df1e',
         image:js
        },
        {
         name:"REACT",
         border:'#61dafb',
         image:react
        },
        {
         name:"NODE JS",
         border:'#549e42',
         image:node
        },
        {
         name:"JAVA",
         border:'#06060b',
         image:java
        },
        {
         name:"GIT",
         border:'red',
         image:git
        },
        {
         name:"EXPRESS JS",
         border:'#16beb8',
         image:express
        }
        
    ]
  return (
   <>
<section className='skills' id='skills'>
<h5>Technologies I have worked with</h5>
      <h2>Skills</h2>
      <div className='skills_container'>
    {
        skill.map(({name,border,image},index)=>{
 return <div key={index} className='skill_box' style={{boxShadow:`${border} 0px 2px 5px 1px `}}>
    <img className="skill_img" src={image} alt="pic"></img>
    <p className='skill_name'>{name}</p>
 </div>
        })
    }
    </div>
</section>
   </>
    
  )
}

export default Skills