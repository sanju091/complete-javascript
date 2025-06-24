//---object-->>>an object is a collection of key-value pair---Objects are used to store related data and behaviors together


const employee={
   calTax(){
      console.log("tax rate is 10%");
   },
};

const karan1={
   salary:20000,
}
karan1.__proto__ = employee;

const karan2={
   salary:20000,
}
karan2.__proto__ = employee;

const karan3={
   salary:20000,
}
karan3.__proto__ = employee;

const karan4={
   salary:20000,
}
karan4.__proto__ = employee;

