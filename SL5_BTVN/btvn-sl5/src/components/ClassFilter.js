import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const ClassFilter = ({ subjects, isUrlMode, setIsUrlMode, useStateFilters, setUseStateFilters }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read current filter state depending on mode
  const keyword = isUrlMode
    ? searchParams.get('keyword') || ''
    : useStateFilters.keyword;
  const subject = isUrlMode
    ? searchParams.get('subject') || 'ALL'
    : useStateFilters.subject;
  const status = isUrlMode
    ? searchParams.get('status') || 'ALL'
    : useStateFilters.status;

  const updateFilter = (key, value) => {
    if (isUrlMode) {
      const newParams = new URLSearchParams(searchParams);
      if (!value || value === 'ALL') {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
      setSearchParams(newParams);
    } else {
      setUseStateFilters(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleReset = () => {
    if (isUrlMode) {
      setSearchParams({});
    } else {
      setUseStateFilters({ keyword: '', subject: 'ALL', status: 'ALL' });
    }
  };

  return (
    <div className="card filter-card">
      <div className="filter-mode-header">
        <div className="mode-toggle">
          <span className="mode-label">Chế độ quản lý Filter:</span>
          <button
            type="button"
            className={`btn-mode ${isUrlMode ? 'active' : ''}`}
            onClick={() => setIsUrlMode(true)}
          >
            URL Query Params (useSearchParams)
          </button>
          <button
            type="button"
            className={`btn-mode ${!isUrlMode ? 'active' : ''}`}
            onClick={() => setIsUrlMode(false)}
          >
            Local State (useState đơn thuần - Lab 2-3)
          </button>
        </div>

        {isUrlMode && (
          <div className="url-preview">
            <span className="url-tag">URL Query String: </span>
            <code>{window.location.search || '(none)'}</code>
          </div>
        )}
      </div>

      <div className="filter-controls">
        <div className="filter-input-wrapper">
          <input
            type="text"
            placeholder="Tìm kiếm theo class name hoặc Lecture..."
            value={keyword}
            onChange={(e) => updateFilter('keyword', e.target.value)}
            className="input-control"
          />
        </div>

        <div className="filter-select-wrapper">
          <select
            value={subject}
            onChange={(e) => updateFilter('subject', e.target.value)}
            className="select-control"
          >
            <option value="ALL">All Subjects</option>
            {subjects.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-radio-wrapper">
          <span className="status-label">Status:</span>
          <label className="radio-label">
            <input
              type="radio"
              name="filterStatus"
              value="ALL"
              checked={status === 'ALL'}
              onChange={(e) => updateFilter('status', e.target.value)}
            />
            <span>All</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="filterStatus"
              value="OPEN"
              checked={status === 'OPEN'}
              onChange={(e) => updateFilter('status', e.target.value)}
            />
            <span>OPEN</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="filterStatus"
              value="CLOSED"
              checked={status === 'CLOSED'}
              onChange={(e) => updateFilter('status', e.target.value)}
            />
            <span>CLOSED</span>
          </label>
        </div>

        {(keyword || subject !== 'ALL' || status !== 'ALL') && (
          <button type="button" onClick={handleReset} className="btn-clear-filter">
            ✕ Xóa lọc
          </button>
        )}
      </div>
    </div>
  );
};
