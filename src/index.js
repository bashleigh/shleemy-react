import React from 'react';
import { shleemy } from 'shleemy';
export const Shleemy = ({ date, rounding, toDate, humanReadable, className, }) => {
    const interval = shleemy(date, {
        toDate,
        rounding,
        humanReadable: {
            future: humanReadable === null || humanReadable === void 0 ? void 0 : humanReadable.future,
            past: humanReadable === null || humanReadable === void 0 ? void 0 : humanReadable.past,
        },
    });
    return className ? (React.createElement("span", { className: className }, interval)) : (React.createElement(React.Fragment, null, interval));
};
