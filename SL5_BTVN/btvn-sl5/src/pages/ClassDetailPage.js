import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useClassContext } from '../context/ClassContext';

export const ClassDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { classes, addStudentToClass, removeStudentFromClass } = useClassContext();

  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    email: '',
  });

  const [showAddForm, setShowAddForm] = useState(false);

  // Find class matching params id
  const targetClass = classes.find((c) => String(c.id) === String(id));

  if (!targetClass) {
    return (
      <div className="page-container">
        <div className="card empty-card">
          <h2>❌ Không tìm thấy lớp học!</h2>
          <p>Lớp học có ID "{id}" không tồn tại hoặc đã bị xóa.</p>
          <button className="btn btn-primary-brown" onClick={() => navigate('/classes')}>
            ← Quay lại danh sách
          </button>
        </div>
      </div>
    );
  }

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.id.trim() || !newStudent.name.trim() || !newStudent.email.trim()) {
      alert('Vui lòng điền đầy đủ Mã SV, Tên SV và Email!');
      return;
    }

    addStudentToClass(targetClass.id, newStudent);
    setNewStudent({ id: '', name: '', email: '' });
    setShowAddForm(false);
  };

  const handleRemoveStudent = (studentId, studentName) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa sinh viên ${studentName} khỏi lớp này?`)) {
      removeStudentFromClass(targetClass.id, studentId);
    }
  };

  const students = targetClass.students || [];

  return (
    <div className="page-container detail-page">
      <div className="back-button-wrapper">
        <button className="btn btn-back" onClick={() => navigate(-1)}>
          ← Quay lại danh sách
        </button>
      </div>

      <div className="card detail-info-card">
        <h1 className="detail-title">Chi tiết lớp: {targetClass.name}</h1>
        <div className="detail-meta">
          <p>
            <strong>Môn học (Subject):</strong> {targetClass.subject}
          </p>
          <p>
            <strong>Giảng viên (Lecturer):</strong> {targetClass.lecturer}
          </p>
          <p className="status-meta">
            <strong>Trạng thái (Status):</strong>{' '}
            <span className={`badge badge-${targetClass.status?.toLowerCase()}`}>
              {targetClass.status}
            </span>
          </p>
        </div>
      </div>

      <div className="students-section">
        <div className="students-header">
          <h2>Danh sách sinh viên đã Enroll ({students.length}):</h2>
          {targetClass.status === 'OPEN' && (
            <button
              className="btn btn-add-student"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Hủy' : '+ Enroll Sinh Viên Mới'}
            </button>
          )}
        </div>

        {showAddForm && (
          <div className="card form-card student-form-card">
            <h3>Đăng ký Sinh viên vào lớp {targetClass.name}</h3>
            <form onSubmit={handleAddStudent} className="form-grid-3">
              <input
                type="text"
                placeholder="Mã sinh viên (vd: HE17099)"
                value={newStudent.id}
                onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
                className="input-control"
                required
              />
              <input
                type="text"
                placeholder="Tên sinh viên"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                className="input-control"
                required
              />
              <input
                type="email"
                placeholder="Email sinh viên"
                value={newStudent.email}
                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                className="input-control"
                required
              />
              <button type="submit" className="btn btn-primary-brown">
                Enroll Sinh Viên
              </button>
            </form>
          </div>
        )}

        {students.length > 0 ? (
          <div className="card table-card">
            <div className="table-responsive">
              <table className="student-table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Email</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, idx) => (
                    <tr key={student.id || idx}>
                      <td className="text-center">{idx + 1}</td>
                      <td className="font-semibold">{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-delete-sm"
                          onClick={() => handleRemoveStudent(student.id, student.name)}
                          title="Xóa khỏi lớp"
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="empty-students-msg">
            <p>Chưa có sinh viên nào đăng ký vào lớp học này.</p>
          </div>
        )}
      </div>
    </div>
  );
};
