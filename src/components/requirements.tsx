import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface IContentRequirements {
  title: string;
  description: string;
  targetAudience: string[];
  contentType: 'article' | 'video' | 'podcast' | 'infographic';
  keywords: string[];
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IContentRequirements>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: IContentRequirements) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      reset();
      router.push('/confirmation');
    } catch (error) {
      console.error('Error submitting requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form onSubmit={handleSubmit(onSubmit)} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium">Title</label>
        <input
          id="title"
          type="text"
          {...register('title', { required: 'Title is required' })}
          className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-sm font-medium">Target Audience</label>
        <input
          id="targetAudience"
          type="text"
          {...register('targetAudience', { required: 'Target Audience is required' })}
          placeholder="Comma separated values (e.g., 'developers, designers')"
          className={`w-full px-3 py-2 border rounded ${errors.targetAudience ? 'border-red-500 focus:border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contentType" className="block text-sm font-medium">Content Type</label>
        <select
          id="contentType"
          {...register('contentType', { required: 'Content type is required' })}
          className={`w-full px-3 py-2 border rounded ${errors.contentType ? 'border-red-500 focus:border-red-500' : ''}`}
        >
          <option value="">Select content type</option>
          <option value="article">Article</option>
          <option value="video">Video</option>
          <option value="podcast">Podcast</option>
          <option value="infographic">Infographic</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="keywords" className="block text-sm font-medium">Keywords</label>
        <input
          id="keywords"
          type="text"
          {...register('keywords', { required: 'Keywords are required' })}
          placeholder="Comma separated values (e.g., 'javascript, react')"
          className={`w-full px-3 py-2 border rounded ${errors.keywords ? 'border-red-500 focus:border-red-500' : ''}`}
        />
      </div>
      <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </motion.form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface IContentRequirements {
  title: string;
  description: string;
  targetAudience: string[];
  contentType: 'article' | 'video' | 'podcast' | 'infographic';
  keywords: string[];
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IContentRequirements>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: IContentRequirements) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      reset();
      router.push('/confirmation');
    } catch (error) {
      console.error('Error submitting requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form onSubmit={handleSubmit(onSubmit)} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium">Title</label>
        <input
          id="title"
          type="text"
          {...register('title', { required: 'Title is required' })}
          className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500 focus:border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className={`w-full px-3 py-2 border rounded ${errors.description ? 'border-red-500 focus:border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="targetAudience" className="block text-sm font-medium">Target Audience</label>
        <input
          id="targetAudience"
          type="text"
          {...register('targetAudience', { required: 'Target Audience is required' })}
          placeholder="Comma separated values (e.g., 'developers, designers')"
          className={`w-full px-3 py-2 border rounded ${errors.targetAudience ? 'border-red-500 focus:border-red-500' : ''}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contentType" className="block text-sm font-medium">Content Type</label>
        <select
          id="contentType"
          {...register('contentType', { required: 'Content type is required' })}
          className={`w-full px-3 py-2 border rounded ${errors.contentType ? 'border-red-500 focus:border-red-500' : ''}`}
        >
          <option value="">Select content type</option>
          <option value="article">Article</option>
          <option value="video">Video</option>
          <option value="podcast">Podcast</option>
          <option value="infographic">Infographic</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="keywords" className="block text-sm font-medium">Keywords</label>
        <input
          id="keywords"
          type="text"
          {...register('keywords', { required: 'Keywords are required' })}
          placeholder="Comma separated values (e.g., 'javascript, react')"
          className={`w-full px-3 py-2 border rounded ${errors.keywords ? 'border-red-500 focus:border-red-500' : ''}`}
        />
      </div>
      <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </motion.form>
  );
};

export default GatherRequirements;