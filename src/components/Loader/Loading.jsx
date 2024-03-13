import { Rings } from 'react-loader-spinner';
import css from './Loading.module.css';
export const Loading = () => {
  return (
    <div className={css.loader}>
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
