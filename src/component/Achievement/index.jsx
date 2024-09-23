import React from 'react'

const Achievement = ({progress}) => {
  return (
    <div>
      <h1 className='text-3xl font-extrabold mb-8'>ACHIEVEMENT</h1>
      <ul className="timeline timeline-vertical">
        {
            progress.map(({year, achievement}, index) => {
                if(index == 0) return (
                    <li key={index}>
                    <div className="timeline-start">{year}</div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box">{achievement}</div>
                    <hr />
                  </li>
                )
                if(index == progress.length-1) return (
                    <li key={index}>
                    <hr />
                    <div className="timeline-start">{year}</div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box">{achievement}</div>
                  </li>
                )
                return(
                    <li key={index}>
                        <hr />
                        <div className="timeline-start">{year}</div>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end timeline-box">{achievement}</div>
                        <hr />
                    </li>
                )
            })
        }
    </ul>
    </div>
  )
}

export default Achievement
