import { useSelector } from 'react-redux';

function Loading() {
  const loading = useSelector((state: { loading: { display: boolean } }) => {
    return state.loading.display;
  });

  return (
    <>
      {loading && (
        <div className="modal modal-open">
          <button className="btn btn-square btn-secondary loading"></button>
        </div>
      )}
    </>
  );
}

export default Loading;
