import api from "../api/axios";

export default function EmployeeList({employees, onDelete}) {

    const handleDelete = async (id) => {
        if (!confirm("Delete this employee?")) return;
        await api.delete(`/employees/${id}`);
        onDelete();
    };

    if (!employees.length) {
        return <p>No employees found.</p>;
    }

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Employees</h2>
            <ul className="space-y-2">
                {employees.map((emp) => (
                    <li key={emp._id} className="flex justify-between items-center border p-2 rounded">
                        <div>
                            <p className="font-medium">{emp.fullName}</p>
                            <p className="text-sm text-gray-600">{emp.employeeId} • {emp.department}</p>
                        </div>
                        <button onClick={() => handleDelete(emp._id)} className="text-red-600">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}