import { useState } from "react";
import api from "../api/axios";

export default function AttendanceForm({ employees, onMarked }) {
    
    const [form, setForm] = useState({employeeId: "", date: "", status: "Present"});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/attendance", form);
            onMarked(form.employeeId);
        } catch (e) {
            alert("Error marking attendance");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">

            <h2 className="text-xl font-semibold">Mark Attendance</h2>

            <select className="w-full border p-2 rounded" onChange={(e) => setForm({ ...form, employeeId: e.target.value })}>
                <option value="">Select employee</option>
                {employees.map((emp) => (<option key={emp._id} value={emp._id}> {emp.fullName} </option>))}
            </select>

            <input type="date" className="w-full border p-2 rounded" onChange={(e) => setForm({ ...form, date: e.target.value })} />

            <select className="w-full border p-2 rounded" onChange={(e) => setForm({ ...form, status: e.target.value })}>
                <option>Present</option>
                <option>Absent</option>
            </select>

            <button className="bg-green-600 text-white px-4 py-2 rounded">Mark Attendance</button>

        </form>
    );
}
