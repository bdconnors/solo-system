export class Website  {
  public id:string;
  public name:string;
  public brand:string;
  public favicon:string;
  
  constructor(id:string, name:string, brand:string, favicon:string) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.favicon = favicon;
  }

  /**addManyApplication = (apps:Application[]):number => this.applications.push(...apps);
  addApplication = (app:Application):number =>  this.applications.push(app);
  getApplicationByID = (id:string):Application =>  this.applications.find((app:Application)=>app.id === id);
  getApplication = (index:number):Application =>  this.applications[index];
  updateApplicationByID = (id:string, values:Application):Application => {
    let index:number;
    const currentValue:Application = this.applications.find((app:Application, i:number)=>{
      if(app.id === id){
        index = i;
        return app;
      }
    });
    const newValue: Application = { ...currentValue, ...values }; 
    this.applications[index] = newValue;
    return this.applications[index]
  }
  updateApplication = (i:number, values:Application):Application => {
    const currentValue:Application = this.applications[i];
    const newValue: Application = { ...currentValue, ...values }; 
    this.applications[i] = newValue;
    return this.applications[i]
  }
  removeApplication = (index:number):Application[] => {
    this.applications = this.applications.filter((_:Application, i:number)=> i !== index);
    return this.applications;
  }
  removeApplicationByID = (id:string):Application[] => {
    this.applications = this.applications.filter((app:Application)=>app.id !== id);
    return this.applications;
  }**/
}