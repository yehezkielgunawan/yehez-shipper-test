export type NameStructure = {
  title: string;
  first: string;
  last: string;
};

export type StreetStructure = {
  number: number;
  name: string;
};

export type CoordinatesStructure = {
  latitude: string;
  longitude: string;
};

export type TimeZoneStructure = {
  offset: string;
  description: string;
};

export type LoginStructure = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

export type DOBStructure = {
  date: string;
  age: number;
};

export type RegisteredStructure = {
  date: string;
  age: number;
};

export type IDStructure = {
  name: string;
  value: null;
};

export type PictureStructure = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type LocationStructure = {
  street: StreetStructure;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: CoordinatesStructure;
  timezone: TimeZoneStructure;
};

export type SingleUser = {
  gender: string;
  name: NameStructure;
  location: LocationStructure;
  email: string;
  login: LoginStructure;
  dob: DOBStructure;
  registered: RegisteredStructure;
  phone: string;
  cell: string;
  id: IDStructure;
  picture: PictureStructure;
  nat: string;
};

export type Info = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type Results = {
  results: Array<SingleUser>;
  info: Info;
};
