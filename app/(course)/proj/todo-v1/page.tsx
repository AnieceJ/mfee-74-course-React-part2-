'use client';

import { useState } from 'react';
// 導入類型(型別)
import { Todo, FilterStatus } from './_types/todo';
// 導入子元件
import AddForm from './_components/add-form';
import List from './_components/list';
import FilterBar from './_components/filter-bar';

// 範例資料(mock)
const initData = [
  {
    id: 'u001',
    text: '繳電信費',
    completed: false, // 代表這個事項完成(true)，未完成(false)
    isEditing: false,
  },
  { id: 'u002', text: '寫作業', completed: true, isEditing: false },
];

export default function TodoPage() {
  // 記錄待辨事項的狀態
  const [todos, setTodos] = useState<Todo[]>(initData);
  // 定義過濾用的狀態('all'=全部, 'active'=進行中, 'completed'=已完成)
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');

  // 處理新增
  const onAdd = (todo: Todo) => {
    // 狀態更動第1、2步。加到新狀態的最前面
    const nextTodos = [todo, ...todos];
    // 狀態更動第3步
    setTodos(nextTodos);
  };

  // 處理刪除
  const onRemove = (todoId: string) => {
    const nextTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(nextTodos);
  };

  // 處理完成/未完成的切換
  const onToggleCompleted = (todoId: string) => {
    const nextTodos = todos.map((todo) => {
      // 對符合條件的物件作修改
      if (todo.id === todoId) {
        // 用展開運算子進行複製物件，並修改它的completed值(true <--> false
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    // 設定回狀態
    setTodos(nextTodos);
  };

  // 進入編輯狀態
  const onEdit = (todoId: string) => {
    const nextTodos = todos.map((todo) => {
      // 對符合條件的物件作修改
      if (todo.id === todoId) {
        // 進入編輯狀態(文字輸入框)
        return { ...todo, isEditing: true };
      } else {
        // 其它的強制退出編輯狀態
        return { ...todo, isEditing: false };
      }
    });
    // 設定回狀態
    setTodos(nextTodos);
  };

  // 處理文件編輯後的修改
  const onSave = (todoId: string, updatedText: string) => {
    const nextTodos = todos.map((todo) => {
      // 對符合條件的物件作修改
      if (todo.id === todoId) {
        // 更新修改文字+恢復未編輯前的狀態
        return { ...todo, text: updatedText, isEditing: false };
      } else {
        return todo;
      }
    });
    // 設定回狀態
    setTodos(nextTodos);
  };

  // 依照過濾狀態，返回對應的項目陣列
  const getFilterTodos = () => {
    switch (filterStatus) {
      case 'active':
        return todos.filter((v) => v.completed === false);
      case 'completed':
        return todos.filter((v) => v.completed === true);
      default: // 相當於'all
        return todos;
    }
  };

  return (
    <>
      <h1>待辨事項</h1>
      <hr />
      {/* 新增待辨事項的表單 */}
      <AddForm onAdd={onAdd} />
      {/* 列表 */}
      <List
        // todos={todos}
        // 依照過濾狀態，返回對應的項目陣列
        todos={getFilterTodos()}
        onRemove={onRemove}
        onToggleCompleted={onToggleCompleted}
        onEdit={onEdit}
        onSave={onSave}
      />
      {/* 過濾目前待辨事項各種狀態的按鈕群組 */}
      <FilterBar
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
    </>
  );
}
