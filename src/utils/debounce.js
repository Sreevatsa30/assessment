
const debounce = (fn, wait) => {
    let timer;
    return function (...args) {
        if(timer){
          clearTimeout(timer);
        }
        let context = this;
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}

export default debounce;
