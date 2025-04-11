import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

interface Job {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  category?: string;
  postedAt: string;
}

const backendUrl = import.meta.env.VITE_BACKEND_URL || '';

const Dashboard: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Retrieve the JWT token saved during login
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  // Fetch job postings on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/jobs`);
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      } else {
        setError('Failed to fetch jobs.');
      }
    } catch (err) {
      setError('An error occurred while fetching jobs.');
    }
  };

  const handleCreateJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!title) {
      setError('Job title is required.');
      return;
    }
    try {
      const response = await fetch(`${backendUrl}/api/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, description, location, category })
      });
      if (response.ok) {
        await response.json(); // or const data = ...
        setMessage('Job posting created successfully.');
        // Refresh the job list and reset form fields
        fetchJobs();
        setTitle('');
        setDescription('');
        setLocation('');
        setCategory('');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to create job.');
      }
    } catch (err) {
      setError('An error occurred while creating the job posting.');
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    // Optional confirmation prompt
    if (!window.confirm('Are you sure you want to delete this job posting?')) {
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/jobs/${jobId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        setMessage('Job deleted successfully.');
        fetchJobs();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to delete job.');
      }
    } catch (err) {
      setError('An error occurred while deleting the job posting.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard - Manage Job Postings</h2>
      {error && <p className="error">{error}</p>}
      {message && <p className="message">{message}</p>}

      <h3>Create Job Posting</h3>
      <form onSubmit={handleCreateJob}>
        <div className="form-group">
          <label htmlFor="job-title">Job Title:</label>
          <input
            type="text"
            id="job-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="job-description">Description:</label>
          <textarea
            id="job-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job-location">Location:</label>
          <input
            type="text"
            id="job-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job-category">Category:</label>
          <select
            id="job-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Engineering">Engineering & Data</option>
            <option value="Finance">Finance</option>
            <option value="Legal">Legal</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <button type="submit">Create Job</button>
      </form>

      <h3>Job Postings</h3>
      {jobs.length > 0 ? (
        <ul className="job-list">
          {jobs.map((job) => (
            <li key={job._id} className="job-item">
              <div className="job-details">
                {job.category && <span>{job.category}</span>}<br/>
                <strong>{job.title}</strong><br />
                {job.location && <span>{job.location}</span>}<br/>
                {job.description && <span>{job.description}</span>}
              </div>
              {/* Small “bubble” in the top-right corner */}
              <button
                className="delete-job-button"
                onClick={() => handleDeleteJob(job._id)}
                aria-label="Delete this job"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No job postings available.</p>
      )}

      <div className="logout-container">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
