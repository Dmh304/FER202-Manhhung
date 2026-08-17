import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useClassContext } from '../context/ClassContext';

export const ClassTable = ({ classes, onEdit }) => {
  const navigate = useNavigate();
  const { deleteClass } = useClassContext();

  const handleDelete = (id, name) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa lớp ${name} không?`)) {
      deleteClass(id);
    }
  };

  return (
    <div className="card table-card">
      <div className="table-responsive">
        <table className="class-table">
          <thead>
            <tr>
              <th>NO</th>
              <th>NAME</th>
              <th>SUBJECT</th>
              <th>LECTURER</th>
              <th>ENROLL</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 ? (
              classes.map((cls, index) => (
                <tr key={cls.id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="font-semibold">{cls.name}</td>
                  <td>{cls.subject}</td>
                  <td>{cls.lecturer}</td>
                  <td className="text-center font-bold">{cls.students ? cls.students.length : cls.enrolled}</td>
                  <td className="text-center">
                    <span className={`badge badge-${cls.status?.toLowerCase()}`}>
                      {cls.status}
                    </span>
                  </td>
                  <td className="text-center action-buttons">
                    <button
                      className="btn btn-detail"
                      onClick={() => navigate(`/detail/${cls.id}`)}
                    >
                      Detail
                    </button>
                    <button
                      className="btn btn-edit"
                      onClick={() => onEdit(cls)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(cls.id, cls.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="empty-message">
                  Không tìm thấy lớp học nào phù hợp với điều kiện tìm kiếm/lọc.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
