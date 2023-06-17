let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  


  function PrintDeveloperbyMap() {
   arr.map((val,index)=>{
    if (val.profession === "developer") {
      console.log(index, val);
    }
  })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((val, index) => {
      if (val.profession === "developer") {
        console.log(index, val);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const data = {id:4,name:"susan",age:"20",profession:"intern"}

    arr.push(data)
    arr.map((val,index)=>console.log(index,val))
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    filterdata=arr.filter((val)=>val.profession!=="admin")
    filterdata.map((val,index)=>console.log(index,val))
    
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
      { id: 4, name: "sandip", age: "18", profession: "frontend developer" },
      { id: 5, name: "joe", age: "20", profession: "developer" },
      { id: 6, name: "dee", age: "19", profession: "intern" },
    ];
   const combinedarr= arr.concat(arr2);
   combinedarr.map((val)=>console.log(val))
  }