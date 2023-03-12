let employee  = {
        'firstName': 'Shiva',
        'lastName' : "Ruthra",
        'ID'       : "SN99" ,
        'Salary '  : [100000, 15000],
        'Address'  : "Pavoorchatram,Tenkasi"
   } ;
   
  console.log(employee);
//Need employee Name 

console.log(`Employee name is ${employee.firstName}${employee.lastName}`);
//employee ID

console.log(`Employee ID is ${employee.ID}`);

console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));

//  iteration in object

for (let key of Object.keys(employee))
{
    console.log(`${key} : ${employee[key]}`);
}

for (let values of Object.values(employee))
{
    console.log(values);
}

for(let [key, value] of Object.entries(employee))
{
    console.log(`${key} : ${value}`);
}


for (let key in employee)
{
    console.log(`${key} : ${employee[key]}`);
}