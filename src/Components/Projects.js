import Carousel from "react-material-ui-carousel"
import { Paper, Typography } from "@mui/material"

function Projects() {

  const projects = [
    {
      name:"Lincoln Financial Group",
      desc:"At Lincoln Financial Group, I contributed to the development of enterprise financial applications by building and enhancing mobile user interfaces using Swift for iOS platforms. I worked closely with backend and frontend teams to integrate Swift-based mobile applications with RESTful APIs developed using Java Spring Boot, enabling secure and efficient data communication. My responsibilities included implementing reusable UI components, translating design wireframes into functional mobile screens, and optimizing application performance to ensure a smooth user experience. I also collaborated with cross-functional teams in an Agile environment, participated in code reviews, troubleshooting, and ensured that mobile features met enterprise security and performance standards."
    },
    {
      name:"Verizon",
      desc:"At Verizon, I worked on developing and enhancing customer-facing digital applications by contributing to mobile and web interface development. I collaborated with cross-functional teams to build and integrate Swift-based iOS mobile interfaces with backend services and APIs, ensuring seamless communication between mobile applications and enterprise systems. My role involved implementing responsive UI components, integrating RESTful APIs, and improving application performance and usability across mobile devices. I worked closely with backend engineers and product teams to translate business requirements into scalable technical solutions, participated in Agile development cycles, and contributed to debugging, testing, and optimizing applications to deliver reliable and high-quality user experiences."
    },
    {
      name:"Lowe's",
      desc:"At Lowe’s, I worked as a Senior UI / Frontend Developer contributing to the development of scalable and user-friendly enterprise web applications. I built responsive Single Page Applications using React, Redux, TypeScript, and modern JavaScript (ES6+), focusing on reusable component architecture and optimized UI performance. I collaborated closely with backend teams to integrate RESTful APIs developed using Java and Node.js, enabling seamless data communication between frontend and backend systems. My responsibilities also included implementing secure authentication mechanisms, improving application performance, and ensuring cross-browser compatibility. Additionally, I participated in Agile development processes, performed code reviews, and contributed to testing and debugging efforts to deliver reliable and high-quality applications."
    }
  ]

  return (
    <>
      <b>Experience</b>
      <Carousel>

      {projects.map((item,i)=>(
        <Paper key={i} style={{padding:"40px"}}>

          <Typography variant="h5">
            {item.name}
          </Typography>

          <Typography>
            {item.desc}
          </Typography>

        </Paper>
      ))}

    </Carousel>
</>
  )
}

export default Projects