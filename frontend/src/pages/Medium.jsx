import Test from '../components/Test';
import paragraphs from '../data/paragraphs';
import MediumAudio1 from "../assets/audio/MediumAudio1.mp4";

const Medium = () => {
  return (
    <div>
      <h1 className='text-center text-3xl mb-4'>Medium Level</h1>
      <Test paragraph={paragraphs[Math.floor(Math.random() * paragraphs.length)]} timing={40} audioSrc={MediumAudio1} />
    </div>
  );
};

export default Medium;
