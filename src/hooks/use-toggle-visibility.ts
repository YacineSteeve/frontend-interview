'use client';

import { useState, useEffect, useRef } from 'react';

export function useToggleVisibility<T extends HTMLElement>(initialIsVisible: boolean) {
    const [isVisible, setIsVisible] = useState(initialIsVisible);
    const ref = useRef<T>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isVisible, setIsVisible };
}
