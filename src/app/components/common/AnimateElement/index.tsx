/* eslint-disable react/display-name */
import React from 'react';

import { motion, useCycle } from 'framer-motion';

const AnimateElement = React.forwardRef(({ children, type, direction, offset, scale, className }: any, ref: any) => {
    let offset1;
    let offset2;
    switch (direction) {
        case 'up':
        case 'left':
            offset1 = offset;
            offset2 = 0;
            break;
        case 'right':
        case 'dow':
        default:
            offset1 = 0;
            offset2 = offset;
            break;
    }

    const [x, cycleX] = useCycle(offset1, offset2);
    const [y, cycleY] = useCycle(offset1, offset2);

    switch (type) {
        case 'rotate':
            return (
                <motion.div
                    ref={ref}
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 2,
                        repeatDelay: 0
                    }}
                >
                    {children}
                </motion.div>
            );
        case 'slide':
            if (direction === 'up' || direction === 'down') {
                return (
                    <motion.div ref={ref} animate={{ y }} onHoverEnd={() => cycleY()} onHoverStart={() => cycleY()}>
                        {children}
                    </motion.div>
                );
            }
            return (
                <motion.div ref={ref} animate={{ x }} onHoverEnd={() => cycleX()} onHoverStart={() => cycleX()}>
                    {children}
                </motion.div>
            );

        case 'scale':
        default:
            if (typeof scale === 'number') {
                scale = {
                    hover: scale,
                    tap: scale
                };
            }
            return (
                <motion.div ref={ref} whileHover={{ scale: scale.hover }} whileTap={{ scale: scale.tap }} className={className}>
                    {children}
                </motion.div>
            );
    }
});

AnimateElement.defaultProps = {
    // @ts-ignore
    type: 'scale',
    offset: 10,
    direction: 'right',
    scale: {
        hover: 1,
        tap: 0.9
    }
};

export default AnimateElement;
