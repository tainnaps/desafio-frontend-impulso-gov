import DataListInput, { useComboboxControls } from 'react-datalist-input';
import { getStorageItem, setStorageItem } from '../utils/localStorage';
import DataListItem from './DataListItem';
import { MdOutlineClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import { data } from '../data/cities';
import { v1 as generateUUID } from 'uuid';
import { useEffect } from 'react';

const STORAGE_KEY = 'city';

export default function Modal({ onCloseBtnClick }) {
  const {
    setValue: setDataListValue,
    value: dataListValue
  } = useComboboxControls();

  useEffect(() => {
    const getCityFromStorage = () => {
      const city = getStorageItem(STORAGE_KEY);

      if (city) {
        setDataListValue(city);
      }
    };

    getCityFromStorage();
  }, [setDataListValue]);

  const saveCityInStorage = (city) => {
    setStorageItem(STORAGE_KEY, city);
  };

  const getDataListItems = () => data.map(({ nome, uf }) => {
    const item = {
      id: generateUUID(),
      value: `${nome}, ${uf}`
    };

    return {
      ...item,
      node: <DataListItem item={item} />,
    };
  });

  return (
    <div
      className='w-full min-h-screen bg-black/75 fixed top-0 transition
        duration-150 ease-in-out'
    >
      <div
        className='w-5/12 min-h-screen flex flex-col gap-y-24 px-14 py-8
          fade fixed top-0 right-0 bg-white'
      >
        <button
          className='w-14 h-14 bg-black rounded-full p-4 text-white text-xl flex
            items-center justify-center self-end hover:text-gray-2 transition
            duration-150 ease-in-out'
          onClick={ onCloseBtnClick }
        >
          <MdOutlineClose />
        </button>

        <div className='w-6/12'>
          <DataListInput
            value={dataListValue}
            setValue={setDataListValue}
            label="Escolha um município"
            placeholder="Porto Alegre, RS"
            items={getDataListItems()}
            onSelect={(item) => saveCityInStorage(item.value)}
            className='font-display text-lg tracking-wide'
            labelProps={{
              className: 'px-2'
            }}
            inputProps={{
              className: 'text-3xl p-2 rounded-3xl mt-1 mb-2'
            }}
            listboxOptionProps={{
              className: `w-fit py-1 px-4  mb-1 text-gray-1 rounded-3xl border-2
              border-gray-3 hover:bg-gray-3 focus:bg-gray-3 cursor-pointer`
            }}
          />
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onCloseBtnClick: PropTypes.func
}.isRequired;
