import { createStore } from "vuex";

let today = new Date();
let b = today.toLocaleTimeString().split(':');
let c = today.toDateString().split(' ');

let configDate = c[2] + ' ' + c[1]
let configTime = b[0] + ':' + b[1]


let a = [
  {
  amount: (Math.random() * 1000 + 0.154).toFixed(2),
  status: 'Succeeded',
  desc: 'nbalkd-l2h13sd-fogv5-owe8ufhucajk',
  customer: 'test@gmail.com',
  date: configDate + ', ' + configTime
},
{
  amount: (Math.random() * 1000 + 0.154).toFixed(2),
  status: 'Succeeded',
  desc: 'nbalkd-l2h13sd-fogv5-owe8ufhucajk',
  customer: 'test@gmail.com',
  date: configDate + ', ' + configTime
},
{
  amount: (Math.random() * 1000 + 0.154).toFixed(2),
  status: 'Succeeded',
  desc: 'nbalkd-l2h13sd-fogv5-owe8ufhucajk',
  customer: 'test@gmail.com',
  date: configDate + ', ' + configTime
},
{
  amount: (Math.random() * 1000 + 0.154).toFixed(2),
  status: 'Succeeded',
  desc: 'nbalkd-l2h13sd-fogv5-owe8ufhucajk',
  customer: 'test@gmail.com',
  date: configDate + ', ' + configTime
},
{
  amount: (Math.random() * 1000 + 0.154).toFixed(2),
  status: 'Succeeded',
  desc: 'nbalkd-l2h13sd-fogv5-owe8ufhucajk',
  customer: 'test@gmail.com',
  date: configDate + ', ' + configTime
},
{
  amount: (Math.random() * 1000 + 0.154).toFixed(2),
  status: 'Succeeded',
  desc: 'nbalkd-l2h13sd-fogv5-owe8ufhucajk',
  customer: 'test@gmail.com',
  date: configDate + ', ' + configTime
},
{
  amount: (Math.random() * 1000 + 0.154).toFixed(2),
  status: 'Succeeded',
  desc: 'nbalkd-l2h13sd-fogv5-owe8ufhucajk',
  customer: 'test@gmail.com',
  date: configDate + ', ' + configTime
},
{
  amount: (Math.random() * 1000 + 0.154).toFixed(2),
  status: 'Succeeded',
  desc: 'nbalkd-l2h13sd-fogv5-owe8ufhucajk',
  customer: 'test@gmail.com',
  date: configDate + ', ' + configTime
},
]

export default createStore({
  state: {
    a
  },
  mutations: {},
  actions: {},
  modules: {},
});
