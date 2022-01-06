import { useEffect, useState } from "react"
import createdId from "lib/createdId"
import { useUpdate } from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([])

  useEffect(() => {
    let localStorage = JSON.parse(window.localStorage.getItem("tags") || "[]")
    if (localStorage.length === 0) {
      localStorage = [
        { id: createdId(), name: "衣" },
        { id: createdId(), name: "食" },
        { id: createdId(), name: "住" },
        { id: createdId(), name: "行" }];
    }
   setTags(localStorage)
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags)) 
  }, [tags]);
  
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => { 
    let result = -1;
    for (let i = 0; i < tags.length; i++){
      if (tags[i].id === id) {
        result = i
      }
      break
     }
    return result
  }
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? { id, name: obj.name } : tag))
  }
  const deleteTag = (id: number) => { 
    setTags(tags.filter(tag=>tag.id!==id))
  }
    const AddTag = () => { 
    const tagName = window.prompt("新标签的名称为")
    if (tagName !== null && tagName !== "") { 
      setTags([...tags, {id:createdId(),name:tagName}])
    }
  }
  return { tags, setTags,findTag, updateTag,deleteTag,findTagIndex,AddTag};
};

export default useTags 
