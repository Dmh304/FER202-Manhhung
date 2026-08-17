import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialClasses } from '../data/initialClasses';

const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState(() => {
    const saved = localStorage.getItem('btvn_classes');
    return saved ? JSON.parse(saved) : initialClasses;
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('btvn_theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('btvn_classes', JSON.stringify(classes));
  }, [classes]);

  useEffect(() => {
    localStorage.setItem('btvn_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const addClass = (newClass) => {
    const id = Date.now();
    const enrolled = newClass.students ? newClass.students.length : 0;
    setClasses(prev => [...prev, { ...newClass, id, enrolled, students: newClass.students || [] }]);
  };

  const updateClass = (id, updatedData) => {
    setClasses(prev =>
      prev.map(c => (c.id === Number(id) || c.id === id ? {
        ...c,
        ...updatedData,
        enrolled: updatedData.students ? updatedData.students.length : (c.students ? c.students.length : c.enrolled)
      } : c))
    );
  };

  const deleteClass = (id) => {
    setClasses(prev => prev.filter(c => c.id !== Number(id) && c.id !== id));
  };

  const addStudentToClass = (classId, student) => {
    setClasses(prev =>
      prev.map(c => {
        if (c.id === Number(classId) || c.id === classId) {
          const updatedStudents = [...(c.students || []), student];
          return {
            ...c,
            students: updatedStudents,
            enrolled: updatedStudents.length
          };
        }
        return c;
      })
    );
  };

  const removeStudentFromClass = (classId, studentId) => {
    setClasses(prev =>
      prev.map(c => {
        if (c.id === Number(classId) || c.id === classId) {
          const updatedStudents = (c.students || []).filter(s => s.id !== studentId);
          return {
            ...c,
            students: updatedStudents,
            enrolled: updatedStudents.length
          };
        }
        return c;
      })
    );
  };

  const resetData = () => {
    setClasses(initialClasses);
    localStorage.setItem('btvn_classes', JSON.stringify(initialClasses));
  };

  return (
    <ClassContext.Provider
      value={{
        classes,
        darkMode,
        toggleDarkMode,
        addClass,
        updateClass,
        deleteClass,
        addStudentToClass,
        removeStudentFromClass,
        resetData
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export const useClassContext = () => useContext(ClassContext);
