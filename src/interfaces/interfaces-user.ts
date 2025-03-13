export interface IUser{
    id:string;
    name:string;
    surname:string;
    age:number;
    createdDB:Date;
    updateDB:Date
}
export type IUserDTO=Pick<IUser,"id"|"name"|"surname">