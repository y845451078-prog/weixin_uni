"use strict";
const common_vendor = require("../../common/vendor.js");
const damnPage = () => "./damn/index.js";
const homePage = () => "./home/index.js";
const photoPage = () => "./photo/index.js";
const idPage = () => "./id/index.js";
const uniSegmentedControl = () => "../../my_modules/uni-segmented-control/uni-segmented-control.js";
const _sfc_main = {
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
      current: 0
    };
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
};
if (!Array) {
  const _component_home_page = common_vendor.resolveComponent("home-page");
  const _component_photo_page = common_vendor.resolveComponent("photo-page");
  const _component_damn_page = common_vendor.resolveComponent("damn-page");
  const _component_id_page = common_vendor.resolveComponent("id-page");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  (_component_home_page + _component_photo_page + _component_damn_page + _component_id_page + _easycom_uni_segmented_control2)();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  _easycom_uni_segmented_control();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.current === 0
  }, $data.current === 0 ? {} : {}, {
    b: $data.current === 1
  }, $data.current === 1 ? {} : {}, {
    c: $data.current === 2
  }, $data.current === 2 ? {} : {}, {
    d: $data.current === 3
  }, $data.current === 3 ? {} : {}, {
    e: common_vendor.o($options.onClickItem),
    f: common_vendor.p({
      current: $data.current,
      values: $data.items.map((v) => v.title),
      ["style-type"]: "text",
      ["active-color"]: "#fff"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabBar/tab_bar.js.map
