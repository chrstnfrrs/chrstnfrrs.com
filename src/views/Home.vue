<template>
  <div class="home">
    <p>Hello World</p>
    <p>{{ panda }}</p>
    <p>{{ data }}</p>
    <p>{{ loading }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useQuery } from "@urql/vue";

export default defineComponent({
  setup() {
    const result = useQuery({
      query: `
        query {
          page: Page(id: "page") {
            heading
            next
          }
        }
      `,
    });

    return {
      loading: result.fetching,
      data: result.data,
      panda: "Panda",
    };
  },
  name: "Home",
  components: {},
});
</script>
