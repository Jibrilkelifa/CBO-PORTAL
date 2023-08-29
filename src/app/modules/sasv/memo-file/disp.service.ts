import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class DispService{

    public refno:number;
    public curdate:Date;
    public sendate:Date;
    public to:string;
    public from:string;
    public cc:string;
    public subject:string;
    public body:string;

    setData(    refno:number,
         curdate:Date,
         sendate:Date,
         to:string,
         from:string,
         cc:string,
         subject:string,
         body:string){

            this.refno = refno;
            this.curdate = curdate;
            this.sendate = sendate;
            this.to = to;
            this.from = from;
            this.cc = cc;
            this.subject = subject;
            this.body = body;
         }
}
