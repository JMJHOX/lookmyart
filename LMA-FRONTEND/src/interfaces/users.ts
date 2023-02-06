interface IUserFormValues {
  email: string;
  username?: string;
  password: string;
  confirmPassword?: string;
}

interface IUsersPermissionsUserInput {
  arts?: [number];
  profile_picture?: String;
  contact_number: String;
  website_url: String;
  profile_desc: String;
  background_profile?: String;
  country: string;
}
export class UsersPermissionsUserInput {
  constructor(props?: IUsersPermissionsUserInput) {
    this.contact_number = props?.contact_number || "";
    this.website_url = props?.website_url || "";
    this.profile_desc = props?.profile_desc || "";
    this.country = props?.country || "";
  }

  arts?: [number];
  profile_picture?: String;
  contact_number?: String;
  website_url?: String;
  profile_desc?: String;
  background_profile?: String;
  country?: string;
}
interface userProfileSubmit {
  userId: number;
  data: UsersPermissionsUserInput;
}
export type { IUserFormValues, userProfileSubmit };
