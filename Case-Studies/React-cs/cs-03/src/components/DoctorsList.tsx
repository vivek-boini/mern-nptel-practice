import {Link} from "react-router-dom";

const DoctorsList: React.FC = () => {
    const doctors = [
        { doctorId: 1, patientId: 101 },
        { doctorId: 2, patientId: 202 },
        { doctorId: 3, patientId: 303 }
    ];

    return(
        <div>
            <h2>Doctors List</h2>

            {doctors.map((d) => (
                <div key={d.doctorId}>
                    <Link to={`/doctors/${d.doctorId}/patients/${d.patientId}`}>
                    View Patient {d.patientId} for Doctor {d.doctorId}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default DoctorsList;