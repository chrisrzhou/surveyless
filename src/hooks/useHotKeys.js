import {useEffect} from 'react';

function useHotKeys(handlers) {
  function handleKeyDown(e) {
    if (e.keyCode in handlers) {
      handlers[e.keyCode](e);
    }
  }
  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  });
}

export default useHotKeys;
