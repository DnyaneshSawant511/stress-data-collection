import Test from '../components/Test';
import paragraphs from '../data/paragraphs';

const Medium = () => {
  return (
    <div>
      <h1>Medium Level</h1>
      <Test paragraph={paragraphs[Math.floor(Math.random() * paragraphs.length)]} timing={45} />
    </div>
  );
};

export default Medium;
