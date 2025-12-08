import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecForm {
  businessName: string;
  description: string;
  websiteUrl?: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      reset();
      setError(null);
    }, 1000);
  };

  useEffect(() => {
    if (!loading && error) {
      alert(`Error: ${error}`);
    }
  }, [loading, error]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create Business Specification</h1>
      {error && <p role="alert" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: 'This is required' })}
            className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.businessName && "border-red-300 focus:border-red-500")}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This is required' })}
            rows={4}
            className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.description && "border-red-300 focus:border-red-500")}
          />
        </div>
        <div>
          <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700">Website URL</label>
          <input
            type="url"
            id="websiteUrl"
            {...register('websiteUrl')}
            className={twMerge("mt-1 block w-full rounded-md shadow-sm")}
          />
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            {...register('contactEmail', { required: 'This is required' })}
            className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.contactEmail && "border-red-300 focus:border-red-500")}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            loading && "cursor-not-allowed opacity-50"
          )}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecForm {
  businessName: string;
  description: string;
  websiteUrl?: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      reset();
      setError(null);
    }, 1000);
  };

  useEffect(() => {
    if (!loading && error) {
      alert(`Error: ${error}`);
    }
  }, [loading, error]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create Business Specification</h1>
      {error && <p role="alert" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: 'This is required' })}
            className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.businessName && "border-red-300 focus:border-red-500")}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This is required' })}
            rows={4}
            className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.description && "border-red-300 focus:border-red-500")}
          />
        </div>
        <div>
          <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700">Website URL</label>
          <input
            type="url"
            id="websiteUrl"
            {...register('websiteUrl')}
            className={twMerge("mt-1 block w-full rounded-md shadow-sm")}
          />
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            {...register('contactEmail', { required: 'This is required' })}
            className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.contactEmail && "border-red-300 focus:border-red-500")}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            loading && "cursor-not-allowed opacity-50"
          )}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;