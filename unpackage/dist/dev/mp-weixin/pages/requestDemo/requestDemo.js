"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_segmented_control2 + _easycom_uni_load_more2 + _easycom_uni_icons2)();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_segmented_control + _easycom_uni_load_more + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "requestDemo",
  setup(__props) {
    const picList = common_vendor.ref([]);
    let current = common_vendor.ref(1);
    let items = ["所有", "小猫", "小狗"];
    const network = () => {
      const animalList = ["all", "cat", "dog"];
      return common_vendor.index.request({
        // url: 'https://api.thecatapi.com/v1/images/search',
        // url: 'https://tea.qingnian8.com/tools/taoShow',
        url: "https://tea.qingnian8.com/tools/petShow",
        data: {
          size: 5,
          type: animalList[current.value]
        }
      });
    };
    const getCats = () => {
      common_vendor.index.showNavigationBarLoading();
      network().then((res) => {
        console.log(res.data);
        picList.value = [...picList.value, ...res.data.data];
        console.log(picList.value);
        common_vendor.index.hideNavigationBarLoading();
      });
    };
    const onPreview = (index) => {
      common_vendor.index.previewImage({
        current: index,
        urls: picList.value.map((ele) => ele.url)
      });
    };
    const gotop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 100
      });
    };
    const onRefresh = () => {
      common_vendor.index.startPullDownRefresh();
    };
    const onClickItem = (e) => {
      console.log(e.currentIndex);
      current.value = e.currentIndex;
      picList.value = [];
      getCats();
    };
    common_vendor.onReachBottom(() => {
      getCats();
    });
    common_vendor.onPullDownRefresh(() => {
      picList.value = [];
      current.value = 0;
      getCats();
    });
    common_vendor.onMounted(() => {
      getCats();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickItem),
        b: common_vendor.p({
          current: common_vendor.unref(current),
          values: common_vendor.unref(items),
          ["style-type"]: _ctx.styleType,
          ["active-color"]: _ctx.activeColor
        }),
        c: common_vendor.f(common_vendor.unref(picList), (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => onPreview(index), item._id),
            c: common_vendor.t(item.content),
            d: common_vendor.t(item.author),
            e: item._id
          };
        }),
        d: common_vendor.p({
          status: "loading"
        }),
        e: common_vendor.p({
          type: "refresh",
          size: "30"
        }),
        f: common_vendor.o(onRefresh),
        g: common_vendor.p({
          type: "arrow-up",
          size: "30"
        }),
        h: common_vendor.o(gotop)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e25b1ed9"]]);
wx.createPage(MiniProgramPage);
