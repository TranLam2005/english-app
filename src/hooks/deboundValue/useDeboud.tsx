'use client';
import { useEffect, useState } from 'react';

export const useDebound = <T,>(value: T, delay: number): T => {
    const [deboudValue, setDeboundValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDeboundValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])
    return deboudValue;
}