// Blog 文章類型定義
export interface BlogPost {
  id: number;
  title: string;
  content: string;
}

// Server Action 回應狀態類型
export interface ActionState {
  status: 'success' | 'error';
  message: string;
  payload?: {
    title?: string;
    content?: string;
    id?: number;
  };
}

// Layout 元件 props 類型
export interface RSCLayoutProps {
  children: React.ReactNode;
}

// Error 元件 props 類型
export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// 頁面參數類型
export interface PageParams {
  id: string;
}

// 頁面 props 類型
export interface PostIdPageProps {
  params: Promise<PageParams>;
}

export interface BlogUpdateIdPageProps {
  params: Promise<PageParams>;
}

// 元件 props 類型
export interface ListProps {
  posts?: BlogPost[];
}

export type AddFormProps = object;

export interface DeleteFormProps {
  id: number;
}

export interface UpdateFormProps {
  post?: BlogPost;
}

export type CssLoaderProps = object;
