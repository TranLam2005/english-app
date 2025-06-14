function LeftIcon({width = 30, height = 30}: {width?: number, height?: number}): React.ReactNode {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20"><rect x="0" y="0" width="20" height="20" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" x="0" y="0" width="20" height="20"><path fill="#fff" fillRule="evenodd" d="M7.222 9.897c2.3-2.307 4.548-4.559 6.744-6.754a.65.65 0 0 0 0-.896c-.311-.346-.803-.316-1.027-.08c-2.276 2.282-4.657 4.667-7.143 7.156c-.197.162-.296.354-.296.574c0 .221.099.418.296.592l7.483 7.306a.749.749 0 0 0 1.044-.029c.358-.359.22-.713.058-.881a3407.721 3407.721 0 0 1-7.16-6.988Z"/></svg></svg>
     );
}

export default LeftIcon;