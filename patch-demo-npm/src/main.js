//import {createApp} from 'vue'
//import App from './App.vue'
//import XPicker from "x-picker";
//createApp(App).use(XPicker).mount('#app')

function modify(t) {
  if (t.hasOwnProperty('data')) {
    t.data.forEach((item, index) => {
      if (item.code === 'NOT_START') {
        console.log(item)
        t.data[index].code = 'CAN_RECEIVE';
        t.data[index].couponValidityStartTime = '1681956001000';
      }
    });
  }
  return t;
}

let body = $response.body;
console.log(body)
//body = JSON.stringify(modify(JSON.parse(body)));
$done({ body: body });