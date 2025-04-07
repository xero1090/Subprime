import React, { useState } from 'react';
import './Dropdowns.css';

interface Job {
  title: string;
  shortDesc: string;
  details: string[];
}

const jobs: Job[] = [
  {
    title: 'Creative',
    shortDesc: "Craft the story of Shopify's product and mission.",
    details: [
      'Creative - Staff Marketing Design, Shop',
      'REMOTE - GLOBAL'
    ]
  },
  {
    title: 'Finance',
    shortDesc: "Nerd out on numbers and strategize Shopify's financial operations.",
    details: []
  },
  {
    title: 'Legal',
    shortDesc: "Protect and defend Shopify and our merchants.",
    details: []
  },
  {
    title: 'Support',
    shortDesc: "Solve merchant problems on the front lines.",
    details: []
  }
];

const Dropdowns: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="dropdown-container">
      {jobs.map((job, index) => (
        <div key={index} className="dropdown-item">
          <div className="dropdown-header" onClick={() => handleToggle(index)}>
            <div className="header-content">
              <div className="dropdown-heading">{job.title}</div>
              <div className="dropdown-short-desc">{job.shortDesc}</div>
            </div>
            <div className={`dropdown-toggle-icon ${openIndex === index ? 'open' : ''}`}>
              <svg viewBox="0 0 20 20" width="20" height="20">
                <polyline points="5 7 10 12 15 7" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          {openIndex === index && job.details.length > 0 && (
            <div className="dropdown-details">
              {job.details.map((detail, i) => (
                <div key={i} className="detail-line">
                  {detail}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdowns;
