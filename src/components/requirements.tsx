import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface GatherRequirementsFormValues {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = async data => {
    try {
      setError(null);
      setLoading(true);

      await axios.post<Requirement>('https://api.example.com/requirements', data);

      fetchRequirements();
      reset();
    } catch (err) {
      setError('Failed to add new requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="w-full flex flex-col md:flex-row space-x-3">
          <input
            type="text"
            placeholder="Requirement Name"
            {...register('requirementName', { required: true })}
            className={clsx(
              'p-2 w-full rounded-md',
              errors.requirementName && 'border-red-500'
            )}
          />
        </div>
        <textarea
          rows={4}
          placeholder="Requirement Description"
          {...register('requirementDescription', { required: true })}
          className={clsx(
            'p-2 w-full rounded-md',
            errors.requirementDescription && 'border-red-500'
          )}
        />
        <button type="submit" disabled={loading} className="mt-3 bg-blue-500 text-white p-2 rounded-md">
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-bold">Current Requirements</h3>
        <ul className="list-disc pl-5 mt-2">
          {requirements.map(requirement => (
            <li key={requirement.id} className="mb-1">
              <span>{requirement.name}</span> - <em>({requirement.description})</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface GatherRequirementsFormValues {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = async data => {
    try {
      setError(null);
      setLoading(true);

      await axios.post<Requirement>('https://api.example.com/requirements', data);

      fetchRequirements();
      reset();
    } catch (err) {
      setError('Failed to add new requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="w-full flex flex-col md:flex-row space-x-3">
          <input
            type="text"
            placeholder="Requirement Name"
            {...register('requirementName', { required: true })}
            className={clsx(
              'p-2 w-full rounded-md',
              errors.requirementName && 'border-red-500'
            )}
          />
        </div>
        <textarea
          rows={4}
          placeholder="Requirement Description"
          {...register('requirementDescription', { required: true })}
          className={clsx(
            'p-2 w-full rounded-md',
            errors.requirementDescription && 'border-red-500'
          )}
        />
        <button type="submit" disabled={loading} className="mt-3 bg-blue-500 text-white p-2 rounded-md">
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-bold">Current Requirements</h3>
        <ul className="list-disc pl-5 mt-2">
          {requirements.map(requirement => (
            <li key={requirement.id} className="mb-1">
              <span>{requirement.name}</span> - <em>({requirement.description})</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GatherRequirements;