//body要素を取得し、中身を出力する
console.log(document.body);

//HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('text'));
console.log(document.getElementById('btn'));

//id='text'のHTML要素を取得し、定数を代入する
const text = document.getElementById('text');

//id='btn'のHTML要素を取得し、定数を代入する
const btn = document.getElementById('btn');

//HTML要素がクリックされたときにイベント処理を実行する
button.addEventListener('click', () => {
  console.log(text.textContent);
  text.textContent = 'ボタンをクリックしました';
  console.log(text.textContent);
});



