import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useClassContext } from '../context/ClassContext';
import { ClassForm } from '../components/ClassForm';
import { ClassFilter } from '../components/ClassFilter';
import { ClassTable } from '../components/ClassTable';
import { ComparisonSection } from '../components/ComparisonSection';

export const ClassListPage = () => {
  const { classes, darkMode, toggleDarkMode, resetData } = useClassContext();
  const [searchParams] = useSearchParams();
  const [editingClass, setEditingClass] = useState(null);

  // State to switch between URL Query Params mode and plain useState mode
  const [isUrlMode, setIsUrlMode] = useState(true);
  const [useStateFilters, setUseStateFilters] = useState({
    keyword: '',
    subject: 'ALL',
    status: 'ALL',
  });

  // Extract list of subjects dynamically for filter dropdown
  const subjects = useMemo(() => {
    const set = new Set(classes.map((c) => c.subject));
    return Array.from(set);
  }, [classes]);

  // Optimal filtering calculation using useMemo
  const filteredClasses = useMemo(() => {
    let kw = '';
    let sub = 'ALL';
    let st = 'ALL';

    if (isUrlMode) {
      kw = searchParams.get('keyword') || '';
      sub = searchParams.get('subject') || 'ALL';
      st = searchParams.get('status') || 'ALL';
    } else {
      kw = useStateFilters.keyword || '';
      sub = useStateFilters.subject || 'ALL';
      st = useStateFilters.status || 'ALL';
    }

    return classes.filter((cls) => {
      const matchKeyword =
        !kw ||
        cls.name.toLowerCase().includes(kw.toLowerCase()) ||
        cls.lecturer.toLowerCase().includes(kw.toLowerCase());

      const matchSubject = sub === 'ALL' || cls.subject === sub;
      const matchStatus = st === 'ALL' || cls.status === st;

      return matchKeyword && matchSubject && matchStatus;
    });
  }, [classes, isUrlMode, searchParams, useStateFilters]);

  const handleEdit = (cls) => {
    setEditingClass(cls);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingClass(null);
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="header-title">Quản lý Lớp học</h1>
        <div className="header-actions">
          <button
            onClick={toggleDarkMode}
            className="btn-theme-toggle"
            title="Chuyển chế độ Sáng / Tối"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={resetData}
            className="btn btn-reset-data"
            title="Khôi phục dữ liệu ban đầu"
          >
            🔄 Reset Data
          </button>
        </div>
      </header>

      <main className="main-content">
        {/* Form section for adding/editing class */}
        <ClassForm
          editingClass={editingClass}
          cancelEdit={handleCancelEdit}
        />

        {/* Filter & Search bar section */}
        <ClassFilter
          subjects={subjects}
          isUrlMode={isUrlMode}
          setIsUrlMode={setIsUrlMode}
          useStateFilters={useStateFilters}
          setUseStateFilters={setUseStateFilters}
        />

        {/* Classes Table list */}
        <ClassTable
          classes={filteredClasses}
          onEdit={handleEdit}
        />

        {/* Analysis & Comparison Section for the assignment */}
        <ComparisonSection />
      </main>
    </div>
  );
};
