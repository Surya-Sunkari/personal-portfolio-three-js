import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed text-xl'>
      I've worked on a variety of projects, spanning web development, machine learning, blockchain, and more. 
      Here are a few of my favorites. Feel free to explore the repositories, and let me know any improvements you'd like to see!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-3/4 h-3/4 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500 text-lg'>{project.description}</p>
              <div className='mt-5 font-poppins'>
                <div className='flex justify-between'>
                  {project.links.slice(0, 2).map((info) => (
                    <div className="flex items-center hover:scale-105 transition">
                      <Link
                        to={info.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-semibold text-blue-600 mr-2'
                      >
                        {info.title}
                      </Link>
                      <img
                        src={arrow}
                        alt='arrow'
                        className='w-4 h-4 object-contain'
                      />
                    </div>
                  ))}
                </div>
                <div className='flex justify-between mt-3'>
                  {project.links.slice(2).map((info) => (
                    <div className="flex items-center hover:scale-105 transition">
                      <Link
                        to={info.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-semibold text-blue-600 mr-2'
                      >
                        {info.title}
                      </Link>
                      <img
                        src={arrow}
                        alt='arrow'
                        className='w-4 h-4 object-contain'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
