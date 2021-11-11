import { toaster } from "evergreen-ui";

const _customNotify = (msg) => {
  toaster.notify(msg);
  // let myColor = { background: 'rgb(69,122,251)', text: '#FFFFFF' };
  // notify.show(msg, 'custom', 3000, myColor);
};

const _warningNotify = (msg) => {
  toaster.danger(msg);
  let myColor = { background: '#f11', text: '#FFFFFF' };
  // notify.show(msg, 'custom', 3000, myColor);
};

export { _customNotify, _warningNotify };
