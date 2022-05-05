import React from 'react'

const CompaniesSection = () => {
  return (
    <div className="section bg-grayish dark:bg-dark dark:text-white">
      <div className="container py-10">
        <h3 className="mb-4 text-center text-2xl font-bold">
          Some of the companies benefited from the work I do
        </h3>

        {[1, 2, 3].map((c) => (
          <div key={c} className="mt-10 my-10 flex justify-between">
            {[1, 2, 3].map((c) => (
              <div key={c}>
                <img
                  src="/assets/company-dark.png"
                  alt=""
                  className="h-20 w-40"
                />
                <h2 className="my-2 text-center font-bold">Company Name</h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompaniesSection
