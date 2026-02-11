import { useState } from "react";


export default function EmployeeForm( {onEmployeeAdded} ) {

    const [form, setForm] = useState({ employeeId: "", fullName: "", email: "", department: "" });

    const handleChange = (e) => {
        setForm( {...form, [e.target.name]: e.target.value} );
    }

    const handleSubmit = async () => {
        e.preventDefault();
        try{
            await api.post("/employees", form);
            setForm({employeeId: "",fullName: "",email: "",department: ""});
            onEmployeeAdded();
        }
        catch(e){
            alert('Error adding employee');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">
            <h2 className="text-xl font-semibold">Add Employee</h2>
            <input name="employeeId" placeholder="Employee ID" value={form.employeeId} onChange={handleChange} className="w-full border p-2 rounded"/>
            <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} className="w-full border p-2 rounded"/>
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded"/>
            <input name="department" placeholder="Department" value={form.department} onChange={handleChange} className="w-full border p-2 rounded"/>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Employee</button>
        </form>
    )

}