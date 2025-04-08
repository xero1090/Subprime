import React, { useState, useEffect, FormEvent } from 'react';
import './ApplicationForm.css';

// type RoleType = '';

interface FormData {
  name: string;
  email: string;
  location: string;
  role: string;
  explanation: string;
  proofLink: string;
  ndaConfirmed: boolean;
}

interface LocationSuggestion {
  place_id: number;
  display_name: string;
}

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    role: '',
    explanation: '',
    proofLink: '',
    ndaConfirmed: false,
  });

  const [submitStatus, setSubmitStatus] = useState<string>('');
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);

  // Handle input changes for form fields.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        ndaConfirmed: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Fetch location suggestions from the Nominatim API when user types in the location field.
  useEffect(() => {
    // Only query if there is a value with a minimum length (e.g., 3 characters)
    if (!formData.location.trim() || formData.location.length < 3) {
      setSuggestions([]);
      return;
    }

    // Using a debounce effect
    const timeoutId = setTimeout(() => {
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          formData.location
        )}&format=json&addressdetails=1&limit=5`
      )
        .then((response) => response.json())
        .then((data) => {
          setSuggestions(data);
        })
        .catch((error) => {
          console.error('Error fetching location suggestions:', error);
        });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [formData.location]);

  // Handle selection from suggestions list.
  const handleSuggestionClick = (suggestion: LocationSuggestion) => {
    setFormData((prev) => ({
      ...prev,
      location: suggestion.display_name,
    }));
    setSuggestions([]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setSubmitStatus('Submitting...');

      // Example: POST request to your backend endpoint
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Your application has been submitted successfully!');
        setFormData({
          name: '',
          email: '',
          location: '',
          role: '',
          explanation: '',
          proofLink: '',
          ndaConfirmed: false,
        });
      } else {
        setSubmitStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="application-form-container">
      <h1>
        # You’re{' '}
        <span className="extraordinary-text">
          {'{extraordinary}'}
        </span>
      </h1>
      <form onSubmit={handleSubmit} className="application-form">
        {/* Name Field */}
        <label htmlFor="name">
          Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email Field */}
        <label htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="role">
          Position applying for: <span className="required">*</span>
        </label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        {/* Location Field */}
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Type & select from the dropdown, e.g. Ottawa, ON, Canada"
          value={formData.location}
          onChange={handleChange}
          autoComplete="off"
        />
        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="location-suggestions">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}

        {/* Explanation Field */}
        <label htmlFor="explanation">
          In a few words, explain your selection above
        </label>
        <textarea
          id="explanation"
          name="explanation"
          rows={3}
          value={formData.explanation}
          onChange={handleChange}
          placeholder="e.g., I've contributed to numerous open source projects..."
        />

        {/* Proof Link Field */}
        <label htmlFor="proofLink">
          Share a link to prove it (GitHub, LinkedIn, personal website, etc.)
        </label>
        <input
          type="url"
          id="proofLink"
          name="proofLink"
          placeholder="https://github.com/username"
          value={formData.proofLink}
          onChange={handleChange}
        />

        {/* NDA Confirmation */}
        <div className="checkbox-field">
          <input
            type="checkbox"
            id="ndaConfirmed"
            name="ndaConfirmed"
            checked={formData.ndaConfirmed}
            onChange={handleChange}
            required
          />
          <label htmlFor="ndaConfirmed">
            Please confirm you've read our applicant privacy notice & NDA
          </label>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {submitStatus && <p className="status-message">{submitStatus}</p>}
    </div>
  );
};

export default ApplicationForm;
