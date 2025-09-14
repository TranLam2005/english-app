export interface GetPathNameProps {
    pathNameSegments: string[];
    pathName: string;
}

export const getPathName = ({pathNameSegments, pathName}: GetPathNameProps): string | undefined => {
    if (pathNameSegments.length === 0) {
        return '';
    }
    const indexOfPathName = pathNameSegments.indexOf(pathName);
    if (indexOfPathName === -1) {
        return undefined;
    }
    return pathNameSegments.slice(0, indexOfPathName + 1).join('/');
}