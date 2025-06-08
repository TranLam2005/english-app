function RightIcon({width = 30, height = 30, fill = '#fff'}: {width?: number, height?: number, fill?: string}): React.ReactNode {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 208 456"><rect x="0" y="0" width="208" height="456" rx="8" fill="none"/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 456" fill={fill} x="0" y="0" width="208" height="456"><path fill={fill} d="M9 388q8 4 15 4q11 0 17-6l162-186L41 14Q26-1 11 12Q-4 29 9 42l137 156L9 354q-13 19 0 34z"/></svg></svg>
     );
}

export default RightIcon;