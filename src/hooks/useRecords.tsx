import { useState } from 'react';
import { useUpdate } from './useUpdate';
import { useEffect } from 'react';

export type RecordsItem = {
  tagIds: number[];
  note: string;
  category: "-" | "+";
  amount: number;
  createdAt:string
}
export type NewRecordsItem = Omit<RecordsItem, "createdAt">

export const useRecords = () => { 
    
  const [records, setRecords] = useState<RecordsItem[]>([])
  
    const addRecord = (newrecord: NewRecordsItem) => {
      if (newrecord.amount <= 0) {
        alert("请输入金额")
        return false
      }
      if (newrecord.tagIds.length=== 0) {
        alert("请选择标签")
        return false
      }
      const record = {...newrecord,createdAt:(new Date()).toISOString()}
      setRecords([...records, record]);
      return true
    };

    useEffect(() => {
      setRecords(JSON.parse(window.localStorage.getItem("records")||"[]"))
    }, [])
    
    useUpdate(() => { 
      window.localStorage.setItem("records",JSON.stringify(records))
    }, [records])
    
    return {records,addRecord}
  }
