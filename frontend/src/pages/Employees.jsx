import { useEffect, useState } from "react";
import api from "../api/axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function Employees() {
    
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    setLoading(true);
    const res = await api.get("/employees");
    setEmployees(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <EmployeeForm onEmployeeAdded={fetchEmployees} /> {loading ? (<p>Loading...</p>) : (<EmployeeList employees={employees} onDelete={fetchEmployees} />)}
    </div>
  );
}