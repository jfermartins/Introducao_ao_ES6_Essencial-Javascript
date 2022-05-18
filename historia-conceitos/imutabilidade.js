(() => {
    const user = {
      name: "Jane",
      lastName: "Fernanda Martins"
    };
  
    function getUserWithFullName(user) {
      return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
      };
    }
  
    const userWithFullName = getUserWithFullName(user);
  })();