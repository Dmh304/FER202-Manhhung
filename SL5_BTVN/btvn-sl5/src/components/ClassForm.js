import React, { useState, useEffect } from 'react';
import { useClassContext } from '../context/ClassContext';

export const ClassForm = ({ editingClass, cancelEdit }) => {
  const { addClass, updateClass } = useClassContext();

  const [formData, setFormData] = useState({
    name: '',
    subject: 'Software Development Project',
    lecturer: '',
    status: 'OPEN',
  });

  useEffect(() => {
    if (editingClass) {
      setFormData({
        name: editingClass.name || '',
        subject: editingClass.subject || 'Software Development Project',
        lecturer: editingClass.lecturer || '',
        status: editingClass.status || 'OPEN',
      });
    } else {
      setFormData({
        name: '',
        subject: 'Software Development Project',
        lecturer: '',
        status: 'OPEN',
      });
    }
  }, [editingClass]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.lecturer.trim()) {
      alert('Vui lòng điền đầy đủ Tên lớp và Giảng viên!');
      return;
    }

    if (editingClass) {
      updateClass(editingClass.id, formData);
      if (cancelEdit) cancelEdit();
    } else {
      addClass({
        ...formData,
        enrolled: 0,
        students: []
      });
      setFormData({
        name: '',
        subject: 'Software Development Project',
        lecturer: '',
        status: 'OPEN',
      });
    }
  };

  return (
    <div className="card form-card">
      <form onSubmit={handleSubmit} className="class-form">
        <div className="form-grid">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Tên lớp..."
              value={formData.name}
              onChange={handleChange}
              className="input-control"
              required
            />
          </div>

          <div className="form-group">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="select-control"
            >
              <option value="Project Management">Project Management</option>
              <option value="Software Development Project">Software Development Project</option>
              <option value="Software Testing">Software Testing</option>
              <option value="Front-End Web Development">Front-End Web Development</option>
              <option value="Database Systems">Database Systems</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="lecturer"
              placeholder="Giảng viên..."
              value={formData.lecturer}
              onChange={handleChange}
              className="input-control"
              required
            />
          </div>
        </div>

        <div className="form-row-actions">
          <div className="radio-group inline-radio">
            <label className="radio-label">
              <input
                type="radio"
                name="status"
                value="OPEN"
                checked={formData.status === 'OPEN'}
                onChange={handleChange}
              />
              <span className="radio-text">OPEN</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="status"
                value="CLOSED"
                checked={formData.status === 'CLOSED'}
                onChange={handleChange}
              />
              <span className="radio-text">CLOSED</span>
            </label>
          </div>

          <div className="form-btn-group">
            <button type="submit" className="btn btn-primary-brown">
              {editingClass ? 'Cập nhật lớp' : 'Thêm lớp'}
            </button>
            {editingClass && (
              <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
                Hủy
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
