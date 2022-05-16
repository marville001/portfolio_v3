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
    <div
      style={{
        backgroundImage:
          'url(/assets/gradient-islamic-pattern-background-vector.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="section  bg-slate-50 py-10 dark:bg-dark dark:text-white bg-opacity-60">
        <div className="container">
          <h1 className='text-center font-bold text-xl select-none mb-2 opacity-50'>TOOLS</h1>
          <h2 className="text-center text-3xl font-bold text-dim-dark dark:text-white">
            Programming Languages and Tools
          </h2>

          <div className="my-10 flex flex-wrap justify-center gap-5">
            {langs.map((lang) => (
              <div
                key={lang.id}
                className="cursor-pointer flex flex-col transition-all duration-100 ease-linear items-center p-3 px-5 hover:shadow bg-opacity-100 hover:bg-white rounded-lg"
              >
                <img className="w-14" src={lang.icon} alt="" />
                <p className="mt-3 text-center text-sm">{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LangToolsSection
