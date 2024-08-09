import { useState } from 'react';
import axios from 'axios';

const TriggerCodeQLButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const triggerCodeQL = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Example API request to create a commit or trigger a workflow
      // Replace with your actual API call logic
      const response = await axios.post(
        'https://api.github.com/repos/your-username/your-repo/dispatches',
        {
          event_type: 'trigger-codeql-analysis',
        },
        {
          headers: {
            Authorization: `Bearer YOUR_GITHUB_TOKEN`,
            Accept: 'application/vnd.github.everest-preview+json',
          },
        }
      );

      if (response.status === 204) {
        setSuccess(true);
      }
    } catch (err) {
      setError('Failed to trigger CodeQL analysis');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={triggerCodeQL} disabled={loading}>
        {loading ? 'Triggering...' : 'Trigger CodeQL Analysis'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>CodeQL analysis triggered successfully!</p>}
    </div>
  );
};

export default TriggerCodeQLButton;