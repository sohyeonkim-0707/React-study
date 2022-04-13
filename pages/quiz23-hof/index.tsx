export default function HofPage() {
  const onClickButton = (aa) => (event) => {
    console.log(aa);
  };

  return <button onClick={onClickButton(123)}>Click</button>;
}
