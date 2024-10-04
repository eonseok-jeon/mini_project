export type DataType = {
  enroll_type: number;
  is_free: boolean;
  title: string;
  short_description: string;
  logo_file_url: string;
};

export type QueryData = {
  data: DataType[];
  courseCount: number;
};
