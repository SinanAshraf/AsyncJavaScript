const LoadData = async () => {
    try {
      const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
      const url2 = `https://jsonplaceholder.typicode.com/todos/2`;
      const url3 = `https://jsonplaceholder.typicode.com/todos/3`;
      const url4 = `https://jsonplaceholder.typicode.com/todos/4`;
      
      const res = await Promise.all([fetch(url1),fetch(url2),fetch(url3),fetch(url4)]);
      const data = await Promise.all(res.map(r=>r.json()))
      return data;
      
    } catch (err) {
      console.log(err);
    }
  };
  ( async () => {
    var Date1 = new Date();
    const paralleldata = await LoadData();
    //console.log(paralleldata);
    var diff = new Date().getTime() - Date1.getTime();
    console.log("sync:"+ diff);
    
    var Date1 = new Date();
    const simpledata = await asyncCall();
    //console.log(simpledata);
    var diff = new Date().getTime() - Date1.getTime();
    console.log("sync:"+ diff);
    
  })();
  
  async function asyncCall() {
    
    const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
      const url2 = `https://jsonplaceholder.typicode.com/todos/2`;
      const url3 = `https://jsonplaceholder.typicode.com/todos/3`;
      const url4 = `https://jsonplaceholder.typicode.com/todos/4`;
  
          const res1 = await fetch(url1);
      const data1 = await res1.json();
      
      const res2 = await fetch(url2);
      const data2 = await res2.json();
      
      const res3 = await fetch(url3);
      const data3 = await res3.json();
      
      const res4 = await fetch(url4);
      const data4 = await res4.json();
  
     // return [data1, data2, data3, data4];
  }
  