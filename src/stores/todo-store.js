import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", () => {
  const list = ref([
    { id: "1343453456", title: "todo1", content: "todo1 content" },
  ]);
  function addTodo({title, content}) {
  
  }
});
