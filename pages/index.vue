<template>
  <div>
    <h3>You are</h3>
    <div>Email : {{ user.email }}</div>
    <div>Role : {{ user.role }}</div>
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
import user from "~/apollo/queries/fetchUser";

export default {
  apollo: {
    user: {
      query: user,
      prefetch: true,
      variables() {
        return { userId: "634941c3126761a5b2539b66" };
      },
    },
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