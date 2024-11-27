export type StatusNameType =
  | "success"
  | "canceled"
  | "waiting"
  | "return"
  | "defect";

export type StatusType = {
  id: number;
  name: string;
  key: StatusNameType
  created_at: string | null;
  updated_at: string | null;
};

export type SelectOptionType = {
  label: string;
  value: any;
};
