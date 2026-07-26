import React, { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedHeading({ text, className = '', style = {} }: AnimatedHeadingProps) {
  const [isTriggered, setIsTriggered] = useState(false);
  const initialDelay = 200;
  const charDelay = 30;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTriggered(true);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split('\n');

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;
        return (
          <span key={lineIndex} className="block whitespace-nowrap">
            {line.split('').map((char, charIndex) => {
              const delay = (lineIndex * lineLength * charDelay) + (charIndex * charDelay);
              
              return (
                <span
                  key={charIndex}
                  className="inline-block"
                  style={{
                    opacity: isTriggered ? 1 : 0,
                    transform: isTriggered ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDuration: '500ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionProperty: 'opacity, transform',
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
