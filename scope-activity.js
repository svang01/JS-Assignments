  function outer() {
    let a = "person";
    let b = {
      fname: "shatt",
      age: 12,
    };
    console.log(a, b);
    function inner(a, b) {
      a = "alias";
      b = {
        fname: "byron",
        age: 2,
      };
      b.age = "1";
      console.log(a, b);
    }
    inner(a, b);
    console.log(a, b);
  }
  
  outer();