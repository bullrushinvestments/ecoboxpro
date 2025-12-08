import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestFormValues {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormValues>();

  const onSubmit = async (data: TestFormValues) => {
    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', data);
      router.push('/');
    } catch (err) {
      setError('An error occurred while submitting the test.');
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Write Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="testName" className="block text-sm font-medium">Test Name</label>
          <input
            type="text"
            id="testName"
            {...register('testName', { required: 'This field is required' })}
            aria-invalid={errors.testName ? true : undefined}
            aria-describedby={errors.testName ? 'test-name-error' : undefined}
            className={`w-full px-3 py-2 border rounded ${errors.testName ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {errors.testName && <p id="test-name-error" role="alert" aria-live="polite" className="mt-1 text-sm text-red-500">{errors.testName.message}</p>}
        </div>
        <div>
          <label htmlFor="testDescription" className="block text-sm font-medium">Test Description</label>
          <textarea
            id="testDescription"
            {...register('testDescription', { required: 'This field is required' })}
            aria-invalid={errors.testDescription ? true : undefined}
            aria-describedby={errors.testDescription ? 'test-description-error' : undefined}
            className={`w-full px-3 py-2 border rounded ${errors.testDescription ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {errors.testDescription && <p id="test-description-error" role="alert" aria-live="polite" className="mt-1 text-sm text-red-500">{errors.testDescription.message}</p>}
        </div>
        <button type="submit" disabled={loading} className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TestFormValues {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormValues>();

  const onSubmit = async (data: TestFormValues) => {
    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', data);
      router.push('/');
    } catch (err) {
      setError('An error occurred while submitting the test.');
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Write Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="testName" className="block text-sm font-medium">Test Name</label>
          <input
            type="text"
            id="testName"
            {...register('testName', { required: 'This field is required' })}
            aria-invalid={errors.testName ? true : undefined}
            aria-describedby={errors.testName ? 'test-name-error' : undefined}
            className={`w-full px-3 py-2 border rounded ${errors.testName ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {errors.testName && <p id="test-name-error" role="alert" aria-live="polite" className="mt-1 text-sm text-red-500">{errors.testName.message}</p>}
        </div>
        <div>
          <label htmlFor="testDescription" className="block text-sm font-medium">Test Description</label>
          <textarea
            id="testDescription"
            {...register('testDescription', { required: 'This field is required' })}
            aria-invalid={errors.testDescription ? true : undefined}
            aria-describedby={errors.testDescription ? 'test-description-error' : undefined}
            className={`w-full px-3 py-2 border rounded ${errors.testDescription ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {errors.testDescription && <p id="test-description-error" role="alert" aria-live="polite" className="mt-1 text-sm text-red-500">{errors.testDescription.message}</p>}
        </div>
        <button type="submit" disabled={loading} className={`w-full px-4 py-2 ${loading ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded`}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;