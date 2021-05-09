import Link from 'next/link';
import { useRef, useState } from 'react';
import Dialog from './dialog';

const Result = ({ data, reset }) => {

    const inputRef = useRef(null);
    const [open, setOpen] = useState(false);

    const copyToClipboard = (e) => {
        inputRef.current.select();
        document.execCommand('copy');
        e.target.focus();
    }

    const handleClickOpen = () => ( setOpen(true) )
    const handleClose = () => ( setOpen(false) )

    return (
        <>
            <br /><br />
            <div id="formurl" style={{maxWidth: '400px'}}>
                <input id="shortenurl" type="text" ref={inputRef} defaultValue={data?.short_url} />
                <div id="formbutton">
                    <input type="button" onClick={copyToClipboard} data-clipboard-target="#shortenurl" className="copy" defaultValue="Copy URL" />
                </div>
            </div>
            <p className="boxtextleft">Long URL:
                <a href={data?.url} target="_blank">{data?.url}</a>
                <br /><br />
                Spacify <a onClick={handleClickOpen}>expired</a> in real-time from your shortened URL.<br />
                Create other <Link href="/"><a onClick={reset}>shortened URL.</a></Link>
            </p>

            <Dialog open={open} close={handleClose} data={data.short_code} />
        </>
    );
}

export default Result;