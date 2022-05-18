(() => {
    const getName = () => {
      return "Jane Fernanda Martins";
    };
  
    const log = value => {
      console.log(value);
    };
  
    const main = fn => {
      return () => log(fn());
    };
  
    const logName = main(getName);
  
    logName();
  })();