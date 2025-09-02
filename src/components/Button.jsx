import { Box } from '@mantine/core';
import React from 'react';

const Button = ({ title, id, leftIcon, rightIcon, containerClass, href }) => {
  // If href is provided, render as <a> for link behavior
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        id={id}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden bg-violet-50 px-4 py-3 !text-black rounded-xl ${containerClass}`}
      >
        {leftIcon}
        <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
          <Box>{title}</Box>
        </span>
        {rightIcon}
      </a>
    );
  }

  // Otherwise, render as a button element with same styling
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden !bg-violet-50 px-5 py-3 !text-black rounded-xl ${containerClass}`}
      type="button"
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <Box>{title}</Box>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;