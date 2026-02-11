import { useEffect, useState } from "react";
import api from "../api/axios";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

export default function Attendance() {

  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    api.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  const fetchAttendance = async (employeeId) => {
    const res = await api.get(`/attendance/${employeeId}`);
    setRecords(res.data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <AttendanceForm employees={employees} onMarked={fetchAttendance} />
      <AttendanceList records={records} />
    </div>
  );
}
