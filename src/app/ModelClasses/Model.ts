export class UserInfo {
    public name: string = '';
    public facebook: string = '';
    public instagram: string = '';
    public marStatus: string = '';
    public gender: string = '';
    public bloodGroup: string = '';
    public panNo: string = '';
    public profileDesc: string = '';
    public passport: string = '';
    public nationality = '';
    public emailId: string = '';
    public dob: string = '';
    public userProfLine: string = '';
    public linkedIn: string = '';
    public gitHub: string = '';
    public experience: string = '';
    public typeOfDev: string = '';
    public contactNos: ContactNOS = new ContactNOS();
    public interests: Interests = new Interests();
    public address: string = '';
    public keySkills: KeySkills = new KeySkills();
    public certifications: Certifications = new Certifications();
    public accomplishments: Accomplishments = new Accomplishments();
    public educationDetails: EducationDetails = new EducationDetails();
    public professionalDetails: ProfessionalDetails = new ProfessionalDetails();
}

export class Accomplishments {
    public accomplishment: Accomplishment[] = [];
}
export class Interests {
    public interest: string[] = [];
}
export class Accomplishment {
    public name: string = '';
    public description: string = '';
}

export class Certifications {
    public certification: Certification[] = [];
}

export class Certification {
    public name: string = '';
    public validity: string = '';
    public uriAddress: string = '';
}

export class ContactNOS {
    public contactNo: string[] = [];
}

export class EducationDetails {
    public education: Education[] = [];
}

export class Education {
    public degree: string = '';
    public grade: string = '';
    public college: string = '';
    public university: string = '';
    public percentage: string = '';
    public year: string = '';
}

export class KeySkills {
    public skill: Skill[] = [];
}

export class Skill {
    public name: string = '';
    public rating: string = '';
}

export class ProfessionalDetails {
    public professionalDetail: ProfessionalDetail[] = [];
}

export class ProfessionalDetail {
    public order: string = '';
    public designation: string = '';
    public organization: string = '';
    public companyDuration: string = '';
    public projects: Projects = new Projects();
}

export class Projects {
    public project: Project[] = [];
}

export class Project {
    public name: string = '';
    public description: string = '';
    public responsibilities: Responsibilities = new Responsibilities();
    public environments: Environments = new Environments();
}

export class Environments {
    public environment: string[] = [];
}

export class Responsibilities {
    public responsibility: string[] = [];
}