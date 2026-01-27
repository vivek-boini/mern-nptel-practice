// Profile type definition
type Profile={
    username: string,
    bio: string | null,  // bio can be null or string
    avatarUrl?: string   //optional avatar
}

let profile1: Profile={
    username: "Anish",
    bio: null
}

let profile2: Profile={
    username: "Akash",
    bio: "3rd year IT Student",
    avatarUrl: "Akash Avatar"
}

function showProfile(profile: Profile):void{
    console.log("\nProfile Info:");
    let bio = profile.bio === null ? "Bio not provided" : `Bio: ${profile.bio}`;
    let avatarUrl = profile.avatarUrl ? profile.avatarUrl : "Default Avatar";
    console.log(`User Name: ${profile.username}`)
    console.log(bio);
    console.log(`Avatar: ${avatarUrl}`)
}

showProfile(profile1);
showProfile(profile2);

/*
Output:

Profile Info:
User Name: Anish
Bio not provided
Avatar: Default Avatar

Profile Info:
User Name: Akash
Bio: 3rd year IT Student
Avatar: Akash Avatar
*/