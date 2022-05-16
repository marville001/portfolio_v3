import React from 'react'

const langs = [
  { id: 0, name: 'React JS', icon: '/icons/react.jpeg' },
  { id: 12, name: 'Angular', icon: '/icons/angular.png' },
  { id: 1, name: 'Node JS', icon: '/icons/nodejs.jpeg' },
  { id: 2, name: 'Tailwind CSS', icon: '/icons/tailwindcss.jpeg' },
  { id: 3, name: 'Typescript', icon: '/icons/typescript.png' },
  { id: 4, name: 'Bootstrap', icon: '/icons/bootstrap.jpeg' },
  { id: 5, name: 'HTML 5', icon: '/icons/html5.png' },
  { id: 6, name: 'CSS 3', icon: '/icons/css3.png' },
  { id: 7, name: 'Mongo DB', icon: '/icons/mongodb.jpeg' },
  { id: 8, name: 'Git', icon: '/icons/git.png' },
  { id: 9, name: 'MySQL', icon: '/icons/mysql.png' },
  { id: 10, name: 'Sequelize', icon: '/icons/sequelize.png' },
  { id: 11, name: 'Python', icon: '/icons/python.png' },
  { id: 13, name: 'Docker', icon: '/icons/docker.png' },
  { id: 14, name: 'Heroku', icon: '/icons/heroku.png' },
  { id: 15, name: 'Bitbucket', icon: '/icons/bitbucket.png' },
  { id: 16, name: 'AWS', icon: '/icons/aws.png' },
  { id: 17, name: 'Yarn', icon: '/icons/yarn.png' },
]

const LangToolsSection = () => {
  return (
    <div className="section  dark:text-white bg-slate-50 py-10 dark:bg-dark">
      <div className="container">
        <h2 className="text-center dark:text-white text-3xl font-bold text-dim-dark">
          Programming Languages and Tools
        </h2>

        <div className="flex justify-center gap-5 my-10 flex-wrap">
          {langs.map((lang) => (
            <div key={lang.id} className='hover:shadow p-3 cursor-pointer px-5'>
              <img className="w-14" src={lang.icon} alt="" />
              <p className='mt-3 text-sm text-center'>{lang.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LangToolsSection
