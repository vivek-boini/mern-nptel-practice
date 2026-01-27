//different staff roles
enum Role { Doctor, Nurse, Admin};  

//structure of staff member
interface Staff {
    id: number,
    name: string,
    role: Role
}

let HospitalStaff: Staff[]=[
    {id: 1, name: "Ramu", role: Role.Doctor},
    {id: 2, name: "Sakshi", role: Role.Nurse},
    {id: 3, name: "Amit", role: Role.Admin}
]

function printSummary():void{
    console.log("Summary of Staff: ")
    HospitalStaff.forEach(staff=>{
        //Role[staff.role] converts enum val to string
        console.log(`ID: ${staff.id}, Name: ${staff.name}, Role: ${Role[staff.role]}`);
    })
}

printSummary();

/*
Output:

Summary of Staff: 
ID: 1, Name: Ramu, Role: Doctor
ID: 2, Name: Sakshi, Role: Nurse
ID: 3, Name: Amit, Role: Admin
*/