<template>
	<view>
		<view class="home_tab">
			<view class="home_tab_content">
				<view v-if="current === 0">
					<home-page></home-page>
				</view>
				<view v-if="current === 1">
					<photo-page></photo-page>
				</view>
				<view v-if="current === 2">
					<damn-page></damn-page>
				</view>
				<view v-if="current === 3">
					<id-page></id-page>
				</view>
			</view>
			<view class="home_tab_bar">
				<view class="title_inner">
					<uni-segmented-control :current="current" :values="items.map(v=>v.title)" @clickItem="onClickItem"
						style-type="text" active-color="#fff">
					</uni-segmented-control>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import damnPage from './damn/index.vue';
	import homePage from './home/index.vue';
	import photoPage from './photo/index.vue';
	import idPage from './id/index.vue';
	import {
		uniSegmentedControl
	} from "../../my_modules/uni-segmented-control/uni-segmented-control.vue";
	export default {
		components: {
			damnPage,
			homePage,
			photoPage,
			idPage,
			uniSegmentedControl
		},
		data() {
			return {
				items: [{
					"title": "Home"
				}, {
					"title": "Photo"
				}, {
					"title": "Damn"
				}, {
					"title": "ID"
				}],
				current: 0,
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss">
	.home_tab {
		.home_tab_bar {
			width: 100%;
			position: fixed;
			bottom: 0;
			padding: 20px 0;
			.title_inner {
				backdrop-filter: blur(3px);
				margin: 0 10px;
				border: 1px solid #fff;
				padding: 10px 50px;
				border-radius: 50px;
			}
		}
		/* 使用伪元素创建渐变背景 */
		.home_tab_bar::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			/* 从上到下渐变：白色透明 -> 黑色透明 */
			background: linear-gradient(to bottom,
					rgba(255, 255, 255, 0.3),
					/* 顶部：白色透明 */
					rgba(0, 0, 0, 0.6)
					/* 底部：黑色透明 */
				);
		}
	}
</style>