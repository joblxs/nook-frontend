<template>
  <lay-space>
    <lay-ripple>
      <lay-button>click</lay-button>
    </lay-ripple>
    <lay-ripple type="out" borderRadius="2px">
      <lay-button>click</lay-button>
    </lay-ripple>
  </lay-space>
</template>

<script>
import { laySpace } from '@layui/layui-vue';

export default {
  name: 'SpaceExample',
  components: {
    laySpace
  }
}
</script>


<style scoped>

</style>
