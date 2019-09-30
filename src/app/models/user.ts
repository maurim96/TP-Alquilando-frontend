export interface UserDTO {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface User {
  id?: number;
  name?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  job?: string;
}
