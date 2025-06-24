//--------classes


class ToyotaCae {
   constructor(brand,mileage){
      console.log("creating new obj.");
      this.brand=brand;
      this.mileage=mileage;
   }

   start() {
      console.log("start");
   }

   stop() {
      console.log("stop")

   }

}

let fortuner=new ToyotaCae("fortuner",10);
console.log(fortuner);
let lexus=new ToyotaCae("lexus",12);
console.log(lexus);







      //------inheritance




      class person{
         constructor(){
            this.species="homo species";
         }
         eat() {
            console.log("eat");
         }
         sleep(){
            console.log("sleep");
         }
      }

      class engineer extends person{
         constructor(branch){
            super();                                               //super keyword         
            this.branch=branch;
         }
         work() {
            console.log("work")
         }
      }

      let aajad = new engineer();
