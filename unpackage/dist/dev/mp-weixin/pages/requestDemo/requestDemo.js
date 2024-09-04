"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "requestDemo",
  setup(__props) {
    const picList = common_vendor.ref([]);
    const network = () => {
      return common_vendor.index.request({
        // url: 'https://api.thecatapi.com/v1/images/search',
        // url: 'https://tea.qingnian8.com/tools/taoShow',
        url: "https://tea.qingnian8.com/tools/petShow",
        data: {
          size: 5
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
    common_vendor.onReachBottom(() => {
      getCats();
    });
    common_vendor.onPullDownRefresh(() => {
      picList.value = [];
      getCats();
    });
    common_vendor.onMounted(() => {
      getCats();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(picList), (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => onPreview(index), item._id),
            c: common_vendor.t(item.content),
            d: common_vendor.t(item.author),
            e: item._id
          };
        }),
        b: common_vendor.o(onRefresh),
        c: common_vendor.o(gotop)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e25b1ed9"]]);
wx.createPage(MiniProgramPage);
