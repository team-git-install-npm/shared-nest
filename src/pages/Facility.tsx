import AnimatedDiv from '../components/AnimatedDiv';
import 'react-day-picker/dist/style.css';
import SlotPicker from '../components/SlotPicker';
import WeekPicker from '../components/WeekPicker';
import { useParams } from 'react-router-dom';
import { useFacilityStore } from '../store/facilityStore';
import { useEffect } from 'react';

const Facility = () => {
  const { id } = useParams();
  const { fetchFacility, facility } = useFacilityStore();

  useEffect(() => {
    fetchFacility(Number(id));
  }, []);

  return (
    <AnimatedDiv>
      <div className="image-container">
        <img
          src={facility?.image}
          alt={facility?.name}
          className="facility__image"
        />
      </div>
      {facility && (
        <>
          <WeekPicker />
          <SlotPicker />
        </>
      )}
    </AnimatedDiv>
  );
};

export default Facility;
