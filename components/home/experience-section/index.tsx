import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ExperienceSection = () => {
  return (
    <div className="bg-gray-100 section dark:bg-dark dark:text-white">
      <div className="container grid grid-cols-1 md:py-20 md:grid-cols-2">
        <div className="z-20 px-2 py-10 sm:px-10">
          <h2 className="mb-6 text-3xl z-[2] capitalize font-bold text-dark dark:text-white">
            Experience and knowledge to highlight
          </h2>
          <div className="">
            <p className="my-2">
              <strong className="mr-2 text-lg font-bold text-dim-dark dark:text-white">
                +3 years
              </strong>
              <span className="opacity-60">
                Designing and Developing web applications using ReactJs, NextJs and NodeJs (MERN Stack), etc
              </span>
            </p>
            <p className="my-2">
              <strong className="mr-2 text-lg font-bold text-dim-dark dark:text-white">
                +1 years
              </strong>
              <span className="opacity-60">
                Designing and Developing mobile applications using React Native
              </span>
            </p>
            <p className="my-2">
              <strong className="mr-2 text-lg font-bold text-dim-dark dark:text-white">
                +3 years
              </strong>
              <span className="opacity-60">Using MERN Stack</span>
            </p>

            <div className="my-4">
              <p className="">
                Currently working with ReactJs, NodeJs, GraphQl, TypeScript and
                PostgresDB
              </p>
              <Link href="/now">
                <a className='inline-block px-4 py-1 mt-2 text-sm text-white rounded-md bg-primary'>View Current</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-2 sm:px-6 md:px-6">
          <div className="z-[200] -translate-y-0  rounded-t-md bg-[#ffffff] py-4 px-2 dark:bg-dim-dark sm:px-6">
            <Link href="https://api.whatsapp.com/send?phone=254700207054&text=Hey Martin">
              <a
                target="_blank"
                className="flex animate-pulse hover:animate-none items-center justify-between rounded-md bg-[#358a76] px-5 py-3 text-lg text-white lg:text-xl"
              >
                <FaWhatsapp className="text-lg lg:text-2xl" />
                <span>+254700207054</span>
                <HiOutlineExternalLink className="text-lg opacity-50 lg:text-2xl" />
              </a>
            </Link>

            <p className="my-4 text-sm tracking-wide opacity-70">
              Contact me by WhatsApp, you will establish communication with me
              directly. You will be able to ask or make arrangement for further
              communications about any task you have.
            </p>

            <div className="w-full p-6 mt-16 rounded-lg _shadow dark:bg-dark">
              <h2 className="mb-2 text-lg font-bold">Schedule a meeting</h2>
              <p className="text-sm font-medium opacity-70">
                Choose the ideal moment and meet with the team to put your ideas
                into action.
              </p>

              <a target="_blank" href="https://cal.com/marville001/30min" className="w-full py-2 mt-6 text-sm text-center text-white border-0 rounded-full lg:text-md btn hover:bg-primary bg-opacity-80 hover:bg-opacity-100 bg-primary">
                Click to coordinate meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
