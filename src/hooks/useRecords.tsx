import { useState } from 'react';

export type RecordsItem = {
  tagId: number[];
  note: string;
  CategorySection: "-" | "+";
  amount: number;
}
  export  const useRecords = () => { 

    const [records,setRecords]= useState<RecordsItem[]>([])
    const addRecord = (record: RecordsItem) => {
      setRecords([...records, record]);
    };

  return {records,addRecord}
  }
