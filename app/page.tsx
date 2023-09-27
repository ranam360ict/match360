import Header from '@/components/Header/Header';
import FindSomeOne from '@/components/HomePage/FindSomeOne';
import MatchingInfo from '@/components/HomePage/matching_info/MatchingInfo';
export default function Home() {
  return (
    <div>
      <div className='background_image h-[700px] relative'>
        <Header />
        <div className='w-1/2 absolute left-[400px] bottom-[150px]'>
          <MatchingInfo />
        </div>
      </div>
      <div className='mt-4'>
        <FindSomeOne />
      </div>
    </div>
  );
}
