export type StatusNameType =
  | "success"
  | "waiting"
  | "not_buyed"
  | "buyed"
  | "defect";

export type StatusType = {
  id: number;
  name: string;
  key: StatusNameType;
  created_at: string | null;
  updated_at: string | null;
};

export type SelectOptionType<T> = {
  label: string;
  value: T;
};
