enum ROLES {
    ADMIN = "admin",
    USER = "user",
    OWNER = "owner"
  }

type User = {
      username: string;
      role: String;
  }


  const kmUser : User = {
      username: "Kevin Marquez",
      role: ROLES.ADMIN
  }

  console.log(kmUser)

  