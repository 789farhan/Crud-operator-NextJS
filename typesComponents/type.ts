export type CardProps={
    title?:any
    id?:any
    data?:any
    class?:any
    detail?:any
    deskcription?:boolean
};


export type ButtonProps={
    buttonname?:string;
    id?:string;
    del?:any
    deskcription?:boolean
}


export type Arraydata={
    name?:string
    scale?:string
    department?:string
    experties?:string
    available?:boolean

}


export type Game={
    game?:string;
}



export type contactbtn={
    title ?:any;
    onclickhandler?:()=>void
}







// display tsc code 

export type DisplayInfo={
   
    User:{
        Username?:string;
        Usermail?:string;
        UserText?:string;
    }
}


// counter tsx code 




export type eventvaluetype={
    target:{
        
        value:string,
        name:string,
        email:string,
        message:string,
    }
}


export type Hookform={
    // User:{
    name?:string,
    email?:string,
    message? :string ,
    // }
}

export type Data={
    User:{
        name:string,
        email:string,
        message :string ,
        }
}

export type Storeinfo={
    name?:string;
    email?:string;
    message?:string;
}

export type Formvalues={
    userName?:string;
    password?:string;
    email?:string;
    userType?:string;
    phonenumber?:number;
}