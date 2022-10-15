<template>
  <div>
    <h3>All of your Todos</h3>
    <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import todos from "~/apollo/queries/fetchTasks";

export default {
  apollo: {
    todos: {
      query: todos,
      prefetch: true,
      variables() {
        return { userId: "634941c3126761a5b2539b66" };
      },
    },
  },
  head: {
    title: "My Todos",
  },
};
</script>