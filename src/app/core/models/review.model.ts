export interface Review {
  id: number;
  author: AuthorDetails;
  content: string;
  created_at: Date;
}

export interface AuthorDetails {
  name:        string;
  username:    string;
  avatar_path: null | string;
  rating:      number | null;
}
