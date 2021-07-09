import { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'

export default function Popup({children, parent}) {
    const el = useMemo(() => document.createElement('div'), []);

    //On mount function
    useEffect(() => {
        const target = parent && parent.appendChild ? parent : document.getElementById('modal-root');
        target.appendChild(el);

        //On unmount function
        return () => {
            target.removeChild(el);
        };
    }, [el, parent])
    return ReactDOM.createPortal(children, el);
}