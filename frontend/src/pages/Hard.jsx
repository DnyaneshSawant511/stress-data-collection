import Test from '../components/Test';
import paragraphs from '../data/paragraphs';
import HardAudio1 from "../assets/audio/HardAudio1.mp4";

const Hard = () => {
  return (
    <div>
      <h1 className='text-center text-3xl mb-4'>Hard Level</h1>
      <Test paragraph={paragraphs[Math.floor(Math.random() * paragraphs.length)]} timing={30} audioSrc={HardAudio1} />
    </div>
  );
};

export default Hard;
