import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selector';
import { setFilter } from '../../redux/filter/filter-slice';
import style from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // Изменение значения фильтра
  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={style.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
          placeholder="Search"
        />
      </label>
    </div>
  );
};

export default Filter;
