'use client';

import { useState } from 'react';

export default function MyChecklist() {
  const [pets, setPets] = useState([
    {
      id: 1,
      label: '狗',
      checked: false,
    },
    {
      id: 2,
      label: '貓',
      checked: false,
    },
    {
      id: 3,
      label: '金魚',
      checked: false,
    },
  ]);

  // 處理核取方塊的勾選
  const onToggleChecked = (petId: number) => {
    const nextPets = pets.map((pet) => {
      // 對符合條件的物件作修改
      if (pet.id === petId) {
        // 用展開運算子進行複製物件，並修改它的checked值(true <--> false
        return { ...pet, checked: !pet.checked };
      } else {
        return pet;
      }
    });
    // 設定回狀態
    setPets(nextPets);
  };

  const onToggleCheckedAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 強制讓所有的pets中的每個pet物件的checked都和全選一致
    const nextPets = pets.map((pet) => {
      return { ...pet, checked: e.target.checked };
    });
    // 設定回狀態
    setPets(nextPets);
  };

  return (
    <>
      <h2>核取方塊群組</h2>
      <hr />
      <input
        type="checkbox"
        // 每個pet狀態中的checked的總合(布林值AND)
        checked={pets.every((v) => v.checked)}
        onChange={onToggleCheckedAll}
      />{' '}
      全選
      <br />
      <br />
      {pets.map((pet) => {
        return (
          <label key={pet.id}>
            <input
              type="checkbox"
              checked={pet.checked}
              value={pet.label}
              onChange={() => {
                onToggleChecked(pet.id);
              }}
            />
            {pet.label}
          </label>
        );
      })}
    </>
  );
}
