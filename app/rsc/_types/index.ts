export interface PageParams {
  id: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface PostDetailPageProps {
  params: Promise<PageParams>;
}

export interface ListClientProps {
  posts: Post[];
}
