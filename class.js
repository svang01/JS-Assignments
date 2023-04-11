class job {
    constructor(name, industry, requireDegree, field, experience,) 
    {
        this.name = name
        this.industry = industry
        this.requireDegree = requireDegree
        this.field = field
        this.experience = experience
    }
    getName() {
        return this.name;
    }
    getFieldAndIndustry () {
        return this.field + " " + this.industry;
    }
    getrequireDegree () {
        return this.requireDegree;
    }
    getexperience () {
        return this.experience;
    }
    getsalary () {
        return this.salary;
    }
}

class worker extends job {
    constructor(name, industry, requireDegree, field, experience, salary) 
    {
        super (name, industry, requireDegree, field, experience);
        this.salary = salary;
    }
    
}

let nurse = new worker ("nancy " , "healthcare", "bachelors", "medical" , "1 year" , "$10k");
let atc = new worker ("shatt" , "healthcare", "masters", "medical", "1 year", "$20k");
let pharmacist = new worker ('becky', 'healthcare', 'PharmD', 'medical', '1 year', "$30k")

console.log(nurse);
console.log(nurse.getName());
console.log(nurse.getFieldAndIndustry());
console.log(atc.getName());
console.log(atc.getexperience());

let teacher = new worker ("hector " , "education", "Masters", "education", "1 year", "$110k");
let proAthlete = new worker ('becky', 'athletics', 'None', 'entertainment', 'none ', "$113m")
 
console.log(teacher.getrequireDegree());
console.log(teacher.getsalary());
console.log(proAthlete.getrequireDegree());
console.log(proAthlete.getsalary());



