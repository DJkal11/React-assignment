import { useEffect, useState } from "react";

function Card(props) {
  const [courses, setCourses] = useState({
    Image: "",
    title: "",
    org: "",
    url: "",
    startDate: "",
    description: ""
  })
  
    let course = props.info;

    useEffect(() => {
        setCourses({
            Image: course.media.image.large,
            title: course.name,
            org: course.org,
            url: course.blocks_url,
            startDate: course.start_display,
            description: course.short_description
        })
        

    }, [course])

  return (
<div  className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
    <a href={courses.url}>
        <img className="rounded-t-lg w-full h-64 object-center" src={courses.Image} alt=""/>
    </a>
    <div className="p-5">
        
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{courses.title}</h5>
            <h4 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{courses.org}</h4>
        
        <p className="mb-3 font-normal text-gray-700">{courses.description}</p>
        <br/>
        <div className="flex flex-row justify-between gap-5">
        <a href={courses.url} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
            View Course
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
        <p className="font-normal mt-2 text-gray-800">Start Date: {courses.startDate}</p>
        </div>
    </div>
    
</div>

  );
}

export default Card;