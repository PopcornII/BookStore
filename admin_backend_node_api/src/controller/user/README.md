# Feature
 - User can Sign up
 - User can Sign in

# API endpoint
 - POST /api/auth/signup : Create a new user
 - POST /api/auth/signin : Logs in user
  
# Signup expected 
{
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

# Signin expects

{
    email: string,
    password: string
}

# tool
 - NodeJS/Express: Server
 - MySQL: Storage
 - JWT: Token based authentication
 - bcryptjs: Password security
 - winston/morgan: Logs
 - Joi: Validations