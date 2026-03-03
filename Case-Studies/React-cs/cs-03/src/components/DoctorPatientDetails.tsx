import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const DoctorPatientDetails: React.FC =()=>{
    const {patientId,doctorId}=useParams<"doctorId" | "patientId">();
    const navigate = useNavigate();

    if(!patientId || !doctorId){
        return <div>Missing or Invalid Parameters</div>;
    }

    const pId=Number(patientId);
    const dId=Number(doctorId);
    if(isNaN(pId) || isNaN(dId)){
        return <div>Invalid ID's</div>
    }

    return(
        <div>
            <button onClick={() => navigate("/")}>Back to List</button>
            <h1>Patient : {pId}</h1>
            <h2>Doctor : {dId}</h2>
        </div>
    );
}

export default DoctorPatientDetails;