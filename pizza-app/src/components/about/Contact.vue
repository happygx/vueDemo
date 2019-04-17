<template>
    <div class="card text-dark bg-light mb3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <router-link :to="{name:'personLink'}">联系人</router-link>
            <router-link :to="{name:'phoneLink'}">联系电话</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>