export interface signUp {
  name: string,
  email: string,
  password: string
}

export interface login {
  email: string,
  password: string
}

export interface contact {
  userName: string,
  userId: number,
  userImg: string,
  phone: number,
  email: string,
  address: string
}