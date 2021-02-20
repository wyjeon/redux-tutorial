import { createStore } from 'redux';

const lightDiv = document.getElementsByClassName('light')[0];
const switchButton = document.getElementById('switch-btn');

const counterHeadings = document.getElementsByTagName('h1')[0];
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');

// 액션 생성 함수 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 생성함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increment = diff => ({ type: INCREMENT, diff });
const decrement = () => ({ type: DECREMENT });

// 초기값 설정
const initialState = {
  light: false,
  counter: 0,
};
