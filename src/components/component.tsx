import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [specifications, setSpecifications] = useState<BusinessSpec[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<{ data: BusinessSpec[] }>('https://api.example.com/business-specs')
      .then(response => {
        setSpecifications(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch business specifications:', err);
        setError('An error occurred while fetching the business specifications.');
        setLoading(false);
      });
  }, []);

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={clsx('p-4', { 'bg-gray-100': !isMobile })}>
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {loading && (
        <div className="flex justify-center items-center">
          <span>Loading...</span>
        </div>
      )}
      {!loading && error ? (
        <div role="alert" aria-live="assertive" className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
          {error}
        </div>
      ) : (
        specifications.map(spec => (
          <div key={spec.id} className="mb-4 bg-white rounded shadow-md p-3">
            <h3 className="text-lg font-semibold">{spec.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: spec.description }} />
            {spec.requirements.length > 0 && (
              <ul className="list-disc pl-5 mt-2">
                {spec.requirements.map(req => (
                  <li key={req} className="text-gray-700">{req}</li>
                ))}
              </ul>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [specifications, setSpecifications] = useState<BusinessSpec[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<{ data: BusinessSpec[] }>('https://api.example.com/business-specs')
      .then(response => {
        setSpecifications(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch business specifications:', err);
        setError('An error occurred while fetching the business specifications.');
        setLoading(false);
      });
  }, []);

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={clsx('p-4', { 'bg-gray-100': !isMobile })}>
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {loading && (
        <div className="flex justify-center items-center">
          <span>Loading...</span>
        </div>
      )}
      {!loading && error ? (
        <div role="alert" aria-live="assertive" className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
          {error}
        </div>
      ) : (
        specifications.map(spec => (
          <div key={spec.id} className="mb-4 bg-white rounded shadow-md p-3">
            <h3 className="text-lg font-semibold">{spec.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: spec.description }} />
            {spec.requirements.length > 0 && (
              <ul className="list-disc pl-5 mt-2">
                {spec.requirements.map(req => (
                  <li key={req} className="text-gray-700">{req}</li>
                ))}
              </ul>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CreateBusinessSpecification;