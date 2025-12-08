import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Test {
  id?: number;
  title: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Title must be at least 5 characters')
      .required('Title is required'),
    content: Yup.string()
      .min(10, 'Content must be at least 10 characters')
      .required('Content is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post<Test>('/api/tests', values);
        setTests([...tests, response.data]);
        formik.resetForm();
      } catch (err) {
        setError('Failed to create test. Please try again.');
      }

      setLoading(false);
    }
  });

  return (
    <div className="p-4 max-w-screen-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Create a New Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange('title')}
            onBlur={formik.handleBlur('title')}
            aria-invalid={formik.touched.title && formik.errors.title ? 'true' : 'false'}
            className={`w-full px-3 py-2 border rounded ${formik.touched.title && formik.errors.title ? 'border-red-500 bg-red-100' : ''}`}
          />
          {formik.touched.title && formik.errors.title ? (
            <div role="alert" aria-live="assertive" className="text-sm text-red-600">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange('content')}
            onBlur={formik.handleBlur('content')}
            aria-invalid={formik.touched.content && formik.errors.content ? 'true' : 'false'}
            className={`w-full px-3 py-2 border rounded ${formik.touched.content && formik.errors.content ? 'border-red-500 bg-red-100' : ''}`}
          />
          {formik.touched.content && formik.errors.content ? (
            <div role="alert" aria-live="assertive" className="text-sm text-red-600">{formik.errors.content}</div>
          ) : null}
        </div>

        <button type="submit" disabled={loading} className={`w-full px-4 py-2 ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-400'}`}>
          {loading ? 'Loading...' : 'Create Test'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Created Tests</h2>
        <ul role="list" aria-label="List of created tests" className="divide-y divide-gray-300">
          {tests.map(test => (
            <li key={test.id} className="flex items-center justify-between py-4 px-6 bg-white rounded-lg shadow-md hover:bg-gray-50">
              <div>
                <p className="text-sm font-medium text-gray-900">{test.title}</p>
                <p className="text-xs text-gray-500">{test.content.slice(0, 20)}...</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Test {
  id?: number;
  title: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'Title must be at least 5 characters')
      .required('Title is required'),
    content: Yup.string()
      .min(10, 'Content must be at least 10 characters')
      .required('Content is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post<Test>('/api/tests', values);
        setTests([...tests, response.data]);
        formik.resetForm();
      } catch (err) {
        setError('Failed to create test. Please try again.');
      }

      setLoading(false);
    }
  });

  return (
    <div className="p-4 max-w-screen-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Create a New Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange('title')}
            onBlur={formik.handleBlur('title')}
            aria-invalid={formik.touched.title && formik.errors.title ? 'true' : 'false'}
            className={`w-full px-3 py-2 border rounded ${formik.touched.title && formik.errors.title ? 'border-red-500 bg-red-100' : ''}`}
          />
          {formik.touched.title && formik.errors.title ? (
            <div role="alert" aria-live="assertive" className="text-sm text-red-600">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange('content')}
            onBlur={formik.handleBlur('content')}
            aria-invalid={formik.touched.content && formik.errors.content ? 'true' : 'false'}
            className={`w-full px-3 py-2 border rounded ${formik.touched.content && formik.errors.content ? 'border-red-500 bg-red-100' : ''}`}
          />
          {formik.touched.content && formik.errors.content ? (
            <div role="alert" aria-live="assertive" className="text-sm text-red-600">{formik.errors.content}</div>
          ) : null}
        </div>

        <button type="submit" disabled={loading} className={`w-full px-4 py-2 ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-400'}`}>
          {loading ? 'Loading...' : 'Create Test'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Created Tests</h2>
        <ul role="list" aria-label="List of created tests" className="divide-y divide-gray-300">
          {tests.map(test => (
            <li key={test.id} className="flex items-center justify-between py-4 px-6 bg-white rounded-lg shadow-md hover:bg-gray-50">
              <div>
                <p className="text-sm font-medium text-gray-900">{test.title}</p>
                <p className="text-xs text-gray-500">{test.content.slice(0, 20)}...</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WriteTests;