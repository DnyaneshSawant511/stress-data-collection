import Test from '../components/Test';
import paragraphs from '../data/paragraphs';

const Hard = () => {
  return (
    <div>
      <h1>Hard Level</h1>
      <Test paragraph={paragraphs[Math.floor(Math.random() * paragraphs.length)]} timing={25} />
    </div>
  );
};

export default Hard;
