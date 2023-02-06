interface IUserFormValues {
  email: string;
  username?: string;
  password: string;
  confirmPassword?: string;
}

interface UsersPermissionsUserInput {
  arts?: [number];
  profile_picture?: String;
  contact_number: String;
  website_url: String;
  profile_desc: String;
  background_profile?: String;
  country: string;
}
interface userProfileSubmit {
  userId: number;
  data: UsersPermissionsUserInput;
}
export type { IUserFormValues, UsersPermissionsUserInput, userProfileSubmit };
