import Test from '../components/Test';
import paragraphs from '../data/paragraphs';

const Easy = () => {
  return (
    <div>
      <h1>Easy Level</h1>
      <Test paragraph={paragraphs[Math.floor(Math.random() * paragraphs.length)]} timing={60} />
    </div>
  );
};

export default Easy;
