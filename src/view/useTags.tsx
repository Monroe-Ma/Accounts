import { useState } from "react"

const useTags = () => {
  const [Tags, setTags] = useState<string[]>(["衣", "食", "住", "行"])
  return { Tags, setTags };
};


export default useTags 