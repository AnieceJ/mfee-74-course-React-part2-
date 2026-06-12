// 定義每個待辨事項的類型(型別)
export interface Todo {
  id: string; // uuid
  text: string;
  completed: boolean; // true代表已完成
  isEditing: boolean; // true代表正在編輯中
}

// 定義過濾狀態的類型
export type FilterStatus = 'all' | 'active' | 'completed';
