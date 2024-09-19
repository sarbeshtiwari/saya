import React, { useEffect, useRef, useState } from 'react';

function Counter({ end, duration, start = 0, isWholeNumber = false }) {
    const [count, setCount] = useState(start);
    const ref = useRef();

    useEffect(() => {
        let observer;
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const newCount = progress * (end - start) + start;
            setCount(isWholeNumber ? Math.round(newCount) : newCount.toFixed(2));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        if (ref.current) {
            observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        window.requestAnimationFrame(step);
                        observer.disconnect();
                    }
                },
                { threshold: 1.0 }
            );
            observer.observe(ref.current);
        }

        return () => observer && observer.disconnect();
    }, [end, duration, start, isWholeNumber]);

    return <span ref={ref}>{count}{isWholeNumber ? '' : ''}</span>;
}

export default Counter;
