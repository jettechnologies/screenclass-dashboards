export type Guardian = {
  _id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  username: string;
  status: "enabled" | "disabled";
  scid: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type Student = Omit<Guardian, "status"> & {
  type: string;
  subscriptionStatus: boolean;
};

export type Response<T> = {
  success: boolean;
  message: string;
  data: T | null;
};
