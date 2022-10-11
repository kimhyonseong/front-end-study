const React = require('react');
const {useRef} = require("react");
const {useState,usrRef} = React;

const EndToEnd = () => {
  const [word,setWord] = useState('도가니');
  const [value,setValue] = useState('');
  const [result,setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');

      inputRef.current.focus();
    } else{
      setResult('땡');
      setValue('');

      inputRef.current.focus();
    }
  }

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{word}1234</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요</label>
        <input id="wordInput" className="wordInput" type="text" ref={inputRef} value={value} onChange={onChangeInput}/>
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

module.exports = EndToEnd;