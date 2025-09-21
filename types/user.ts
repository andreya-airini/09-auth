export type User = {
  email: string;
  username: string;
  avatar: string;
};

export type EditUser = Omit<User, "avatar">;

export type RegisterRequest = {
  email: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type CheckSessionRequest = {
  success: boolean;
};

export type UpdateUserRequest = {
  username?: string;
};
