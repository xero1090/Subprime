import React, { useEffect, useState } from 'react';
import '../Dropdown/dropdowns.css';

interface Job {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  category?: string;
  shortDesc?: string;  
  postedAt: string;
}

const backendUrl = import.meta.env.VITE_BACKEND_URL || '';

const Dropdowns: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/jobs`);
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch jobs.');
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Group jobs by category, defaulting to "Other" if category not provided.
  const groupedJobs: { [key: string]: Job[] } = {};
  jobs.forEach((job) => {
    const cat = job.category || 'Other';
    if (!groupedJobs[cat]) {
      groupedJobs[cat] = [];
    }
    groupedJobs[cat].push(job);
  });

  const categoryKeys = Object.keys(groupedJobs);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="dropdown-container">
      {categoryKeys.map((category, index) => {
        // Use shortDesc from the first job in the group; if not set, fall back to an empty string.
        const groupShortDesc = groupedJobs[category][0]?.shortDesc || "";
        return (
          <div key={category} className="dropdown-item">
            <div className="dropdown-header" onClick={() => handleToggle(index)}>
              <div className="header-content">
                <div className="dropdown-heading">{category}</div>
                <div className="dropdown-shortdesc">{groupShortDesc}</div>
              </div>
              <div className={`dropdown-toggle-icon ${openIndex === index ? 'open' : ''}`}>
                <svg viewBox="0 0 20 20" width="20" height="20">
                  <polyline points="5 7 10 12 15 7" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            {openIndex === index && (
              <div className="dropdown-details">
                {groupedJobs[category].map((job) => (
                  <div key={job._id} className="detail-line">
                    <strong>{job.title}</strong> — {job.location} <br />
                    {job.description}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Dropdowns;
