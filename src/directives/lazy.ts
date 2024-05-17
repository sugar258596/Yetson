import type { Directive, DirectiveBinding } from "vue";

export const lazyLoad: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imge = new Image();
          imge.src = binding.value;
          imge.onload = () => {
            el.setAttribute("src", binding.value);
          }; // 图片加载完成后
          observer.unobserve(el); // 移除监听
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};

export function setupGlobLazy(app: any) {
  app.directive("lazyload", lazyLoad);
}
