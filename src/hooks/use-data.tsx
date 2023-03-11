import { useDispatch, useSelector } from "react-redux";
import {
  Car,
  currentCarData as data,
  resetCarData as reset,
  setCarData as set,
} from "../redux/slices/data.slice";

const useData = () => {
  const dispatch = useDispatch();

  const setCarData = (data: Car) => dispatch(set(data));
  const resetCarData = () => dispatch(reset());

  const currentCarData = useSelector(data);

  return { setCarData, resetCarData, currentCarData };
};

export default useData;
