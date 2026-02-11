export default function AttendanceList({ records }) {

    if (!records.length) {
        return <p>No attendance records.</p>;
    }

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3"> Attendance Records </h2>
            <ul className="space-y-2">
                {records.map((rec) => (
                    <li key={rec._id} className="border p-2 rounded flex justify-between">
                        <span>{rec.date}</span>
                        <span className={rec.status === "Present" ? "text-green-600" : "text-red-600"}> {rec.status} </span>
                    </li>))}
            </ul>
        </div>
    );
}
