// child-menu.vue
<template>
    <el-submenu :index="data.route">
        <template slot="title">{{ data.name }}</template>
        <template v-for="item in data.children">
            <child-menu
                v-if="item.children"
                :data="item"
                :key="item.name"
            />  // 当还有下级菜单时调用组件本身
            // 递归出口：当没有下级菜单时跳出递归，完成渲染最外面层的菜单
            <el-menu-item v-else :index="item.route" :key="item.name">{{ item.name }}</el-menu-item>
        </template>
    </el-submenu>
</template>

<script>
export default {
    name: 'child-menu',
    props: {
        data: {
            type: Object,
            default: () => {
                return {};
            }
        }
    }
};
</script>
