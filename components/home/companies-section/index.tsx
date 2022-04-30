import React from 'react'

import ImageLight from '../../../assets/company-light.png'
import ImageDark from '../../../assets/company-dark.png'

const CompaniesSection = () => {
  return (
    <div className="section bg-grayish dark:bg-dark dark:text-white">
      <div className="container py-10">
        <h3 className="mb-4 text-center text-2xl font-bold">
          Some of the companies benefited from the work I do
        </h3>

        {[1, 2, 3].map((c) => (
          <div className="mt-10 my-10 flex justify-between">
            {[1, 2, 3].map((c) => (
              <div key={c}>
                <img
                  src={ImageDark.src}
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
