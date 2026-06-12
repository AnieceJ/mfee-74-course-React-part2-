'use client';

// 導入類型(型別)
import { Todo } from '../_types/todo';
// 導入子元件
import ListItem from './list-item';
import ListEditForm from './list-edit-form';

export interface ListProps {
  todos: Todo[];
  onToggleCompleted: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string) => void;
  onSave: (id: string, updatedText: string) => void;
}

export default function List({
  todos,
  onToggleCompleted,
  onRemove,
  onEdit,
  onSave,
}: ListProps) {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return todo.isEditing ? (
            <ListEditForm key={todo.id} todo={todo} onSave={onSave} />
          ) : (
            <ListItem
              key={todo.id}
              todo={todo}
              onEdit={onEdit}
              onRemove={onRemove}
              onToggleCompleted={onToggleCompleted}
            />
          );
        })}
      </ul>
    </>
  );
}
