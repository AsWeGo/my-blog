<template>
<div class="home">
    <banner :notHome="false"></banner>
    <div class="site-content animation">
        <div class="notify">
            <div class="search-result" v-if="hideSlogan">
                <span v-if="searchWords">搜索结果："{{searchWords}}" 相关文章</span>
                <span v-else-if="category">分类 "{{category}}" 相关文章</span>
            </div>
            <quote v-else>{{notice}}</quote>
        </div>

        <div class="top-feature" v-if="!hideSlogan">
            <section-title>
                <div style="display: flex;align-items: flex-end;">聚焦<small-ico></small-ico></div>
            </section-title>
            <div class="feature-content">
                <div class="feature-item" v-for="item in features" :key="item.title">
                    <Feature :data="item"></Feature>
                </div>
            </div>
        </div>

        <main class="site-main" :class="{'search':hideSlogan}">
            <section-title v-if="!hideSlogan">推荐</section-title>
            <template v-for="item in postList">
                <post :post="item" :key="item.id"></post>
            </template>
        </main>

        <div class="more" v-show="hasNextPage">
            <div class="more-btn" @click="loadMore">More</div>
        </div>
    </div>
</div>
</template>

<script>
    import Banner from '@/components/banner'
    import Feature from '@/components/feature'
    import sectionTitle from '@/components/section-title'
    import Post from '@/components/post'
    import SmallIco from '@/components/small-ico'
    import Quote from '@/components/quote'
    // import {fetchFocus, fetchList} from '../api'

    export default {
        name: 'Home',
        props: ['cate', 'words'],
        data() {
            return {
                features: [],
                postList: [],
                currPage: 1,
                hasNextPage: false
            }
        },
        components: {
            Banner,
            Feature,
            sectionTitle,
            Post,
            SmallIco,
            Quote
        },
        computed: {
            searchWords() {
                return this.$route.params.words
            },
            category() {
                return this.$route.params.cate
            },
            hideSlogan() {
                return this.category || this.searchWords
            },
            notice() {
                return this.$store.getters.notice
            }
        },
        methods: {
            fetchFocus() {
                this.features = [
                    {
                        id: 1,
                        title: 'Akina',
                        img: 'https://s1.ax1x.com/2020/05/14/YDfRnU.jpg'
                    },
                    {
                        id: 2,
                        title: '使用说明',
                        img: 'https://s1.ax1x.com/2020/05/14/YDf4AJ.jpg'
                    },
                    {
                        id: 3,
                        title: '文章归档',
                        img: 'https://s1.ax1x.com/2020/05/14/YDfT91.jpg'
                    }
                ]
            },
            fetchList() {
                const banners = [
                    'https://s1.ax1x.com/2020/05/14/YDhagx.jpg',
                    'https://s1.ax1x.com/2020/05/14/YDhU81.jpg',
                    'https://s1.ax1x.com/2020/05/14/YDhBDO.jpg',
                    'https://s1.ax1x.com/2020/05/14/YDhoVg.jpg',
                    'https://s1.ax1x.com/2020/05/14/YD4FR1.jpg'
                ]
                for (let i = 0; i < banners.length; i++) {
                    this.postList.push({
                        id: i,
                        isTop: i%2==0,
                        banner: banners[i],
                        isHot: i%2==1,
                        pubTime: 24232472657,
                        title: '看一遍闭着眼都会安装Lua了',
                        summary: 'Lua 是一种轻量小巧的脚本语言，能为应用程序提供灵活的扩展和定制功能。',
                        content: '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
                        viewsCount: 4045,
                        commentsCount: 99
                    })
                }
                this.currPage = Math.floor(this.postList.length / 5);
                this.hasNextPage = this.currPage < this.postList.length
            },
            loadMore() {
                const banners = [
                    'https://s1.ax1x.com/2020/05/14/YDhagx.jpg',
                    'https://s1.ax1x.com/2020/05/14/YDhU81.jpg',
                    'https://s1.ax1x.com/2020/05/14/YDhBDO.jpg',
                    'https://s1.ax1x.com/2020/05/14/YDhoVg.jpg',
                    'https://s1.ax1x.com/2020/05/14/YD4FR1.jpg'
                ]
                let length = this.postList.length;
                for (let i = length; i < length+5; i++) {
                    this.postList.push({
                        id: i,
                        isTop: i%2==0,
                        banner: banners[i%length],
                        isHot: i%2==1,
                        pubTime: 24232472657,
                        title: '看一遍闭着眼都会安装Lua了',
                        summary: 'Lua 是一种轻量小巧的脚本语言，能为应用程序提供灵活的扩展和定制功能。',
                        content: '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
                        viewsCount: 4045,
                        commentsCount: 99
                     })
                }
                
                this.currPage = this.currPage+1;
                this.hasNextPage = this.currPage < this.postList.length
            }
        },
        mounted() {
            this.fetchFocus();
            this.fetchList();
        }
    }
</script>

<style scoped lang="less">

.site-content {
    width: 800px;
    margin: 0 auto;
    .notify {
        margin: 60px 0;
        border-radius: 3px;
        & > div {
            padding: 20px;
        }
    }


    .search-result {
        padding: 15px 20px;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        border: 1px dashed #ddd;
        color: #828282;
    }
}

.top-feature {
    width: 100%;
    height: auto;
    margin-top: 30px;

    .feature-content {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        position: relative;

        .feature-item {
            width: 32.9%;
        }
    }
}

.site-main {
    padding-top: 80px;

    &.search {
        padding-top: 0;
    }
}

.more{
    margin: 50px 0;
    .more-btn{
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #ADADAD;
        border: 1px solid #ADADAD;
        border-radius: 20px;
        margin: 0 auto;
        cursor: pointer;
        &:hover{
            color: #8fd0cc;
            border: 1px dashed #8fd0cc;
        }
    }
}

    /******/
@media (max-width: 800px) {
    .top-feature {
        display: none;
    }

    .site-main {
        padding-top: 40px;
    }

    .site-content {
        .notify {
            margin: 30px 0 0 0;
        }

        .search-result {
            margin-bottom: 20px;
            font-size: 16px;
        }
    }
}

    /******/
</style>
