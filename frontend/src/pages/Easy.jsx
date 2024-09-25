import Test from '../components/Test';
import paragraphs from '../data/paragraphs';

const Easy = () => {
  return (
    <div>
      <h1 className='text-center text-3xl mb-4'>Easy Level</h1>
      <Test paragraph={paragraphs[Math.floor(Math.random() * paragraphs.length)]} timing={40} />
    </div>
  );
};

export default Easy;
